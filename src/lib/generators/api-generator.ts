/**
 * AI-Powered API Generator
 * Generates Next.js API routes with full CRUD operations
 */

export interface APIConfig {
  resource: string;
  description: string;
  schema: Record<string, { type: string; required: boolean; description?: string }>;
  authentication?: boolean;
  validation?: boolean;
  database?: 'supabase' | 'prisma' | 'mongodb';
}

export class APIGenerator {
  /**
   * Generate a complete CRUD API route
   */
  static generateCRUDAPI(config: APIConfig): Record<string, string> {
    const { resource, schema, authentication = true, database = 'supabase' } = config;

    return {
      'route.ts': this.generateMainRoute(resource, schema, authentication, database),
      'schema.ts': this.generateSchemaValidation(resource, schema),
      'queries.ts': this.generateDatabaseQueries(resource, schema, database),
    };
  }

  /**
   * Generate the main API route handler
   */
  private static generateMainRoute(
    resource: string,
    schema: Record<string, any>,
    authentication: boolean,
    database: string
  ): string {
    const resourceName = this.singularize(resource);
    const authCheck = authentication
      ? `
  // Authentication check
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
`
      : '';

    return `import { NextRequest, NextResponse } from 'next/server';
import { ${resourceName}Schema, validate${this.pascalCase(resourceName)} } from './${resource}-schema';
import {
  getAll${this.pascalCase(resource)},
  get${this.pascalCase(resourceName)}ById,
  create${this.pascalCase(resourceName)},
  update${this.pascalCase(resourceName)},
  delete${this.pascalCase(resourceName)}
} from './${resource}-queries';

/**
 * GET /api/${resource}
 * Get all ${resource} or a specific ${resourceName} by ID
 */
export async function GET(request: NextRequest) {
${authCheck}
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const ${resourceName} = await get${this.pascalCase(resourceName)}ById(id);
      if (!${resourceName}) {
        return NextResponse.json({ error: '${resourceName} not found' }, { status: 404 });
      }
      return NextResponse.json(${resourceName});
    }

    const ${resource} = await getAll${this.pascalCase(resource)}();
    return NextResponse.json(${resource});
  } catch (error) {
    console.error('GET ${resource} error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ${resource}' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/${resource}
 * Create a new ${resourceName}
 */
export async function POST(request: NextRequest) {
${authCheck}
  try {
    const body = await request.json();

    // Validate request body
    const validation = validate${this.pascalCase(resourceName)}(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    const new${this.pascalCase(resourceName)} = await create${this.pascalCase(resourceName)}(body);
    return NextResponse.json(new${this.pascalCase(resourceName)}, { status: 201 });
  } catch (error) {
    console.error('POST ${resource} error:', error);
    return NextResponse.json(
      { error: 'Failed to create ${resourceName}' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/${resource}
 * Update an existing ${resourceName}
 */
export async function PUT(request: NextRequest) {
${authCheck}
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const updated${this.pascalCase(resourceName)} = await update${this.pascalCase(resourceName)}(id, updateData);
    if (!updated${this.pascalCase(resourceName)}) {
      return NextResponse.json({ error: '${resourceName} not found' }, { status: 404 });
    }

    return NextResponse.json(updated${this.pascalCase(resourceName)});
  } catch (error) {
    console.error('PUT ${resource} error:', error);
    return NextResponse.json(
      { error: 'Failed to update ${resourceName}' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/${resource}
 * Delete a ${resourceName}
 */
export async function DELETE(request: NextRequest) {
${authCheck}
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await delete${this.pascalCase(resourceName)}(id);
    return NextResponse.json({ success: true, message: '${resourceName} deleted' });
  } catch (error) {
    console.error('DELETE ${resource} error:', error);
    return NextResponse.json(
      { error: 'Failed to delete ${resourceName}' },
      { status: 500 }
    );
  }
}
`;
  }

  /**
   * Generate schema validation using Zod
   */
  private static generateSchemaValidation(
    resource: string,
    schema: Record<string, { type: string; required: boolean; description?: string }>
  ): string {
    const resourceName = this.singularize(resource);
    const schemaFields = Object.entries(schema)
      .map(([key, config]) => {
        let zodType = 'z.string()';

        switch (config.type) {
          case 'string':
            zodType = 'z.string()';
            break;
          case 'number':
            zodType = 'z.number()';
            break;
          case 'boolean':
            zodType = 'z.boolean()';
            break;
          case 'email':
            zodType = 'z.string().email()';
            break;
          case 'url':
            zodType = 'z.string().url()';
            break;
          case 'date':
            zodType = 'z.string().datetime()';
            break;
          default:
            zodType = 'z.any()';
        }

        if (!config.required) {
          zodType += '.optional()';
        }

        const description = config.description
          ? `.describe('${config.description}')`
          : '';

        return `  ${key}: ${zodType}${description},`;
      })
      .join('\n');

    return `import { z } from 'zod';

export const ${resourceName}Schema = z.object({
${schemaFields}
});

export type ${this.pascalCase(resourceName)} = z.infer<typeof ${resourceName}Schema>;

export function validate${this.pascalCase(resourceName)}(data: unknown) {
  try {
    const validated = ${resourceName}Schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.errors };
    }
    return { success: false, errors: [{ message: 'Validation failed' }] };
  }
}
`;
  }

  /**
   * Generate database query functions
   */
  private static generateDatabaseQueries(
    resource: string,
    schema: Record<string, any>,
    database: string
  ): string {
    const resourceName = this.singularize(resource);
    const pascalResource = this.pascalCase(resource);
    const pascalSingular = this.pascalCase(resourceName);

    if (database === 'supabase') {
      return `import { supabase } from '@/lib/supabase/client';
import { ${pascalSingular} } from './${resource}-schema';

const TABLE_NAME = '${resource}';

export async function getAll${pascalResource}(): Promise<${pascalSingular}[]> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as ${pascalSingular}[];
}

export async function get${pascalSingular}ById(id: string): Promise<${pascalSingular} | null> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }

  return data as ${pascalSingular};
}

export async function create${pascalSingular}(${resourceName}: Partial<${pascalSingular}>): Promise<${pascalSingular}> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert({
      tenantid: process.env.TENANT_ID,
      projectid: process.env.PROJECT_ID,
      ...${resourceName},
    })
    .select()
    .single();

  if (error) throw error;
  return data as ${pascalSingular};
}

export async function update${pascalSingular}(
  id: string,
  updates: Partial<${pascalSingular}>
): Promise<${pascalSingular} | null> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }

  return data as ${pascalSingular};
}

export async function delete${pascalSingular}(id: string): Promise<void> {
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq('id', id);

  if (error) throw error;
}
`;
    }

    return `// Database queries for ${resource}\n// Implement your database logic here`;
  }

  /**
   * Generate database migration SQL
   */
  static generateMigration(config: APIConfig): string {
    const { resource, schema, description } = config;

    const columns = Object.entries(schema)
      .map(([key, config]) => {
        let sqlType = 'TEXT';

        switch (config.type) {
          case 'string':
          case 'email':
          case 'url':
            sqlType = 'TEXT';
            break;
          case 'number':
            sqlType = 'INTEGER';
            break;
          case 'boolean':
            sqlType = 'BOOLEAN';
            break;
          case 'date':
            sqlType = 'TIMESTAMPTZ';
            break;
        }

        const notNull = config.required ? ' NOT NULL' : '';
        const comment = config.description
          ? `\nCOMMENT ON COLUMN public.${resource}.${key} IS '${config.description}';`
          : '';

        return `  ${key} ${sqlType}${notNull},${comment}`;
      })
      .join('\n');

    return `-- ============================================
-- Migration: Create ${resource} table
-- Purpose: ${description}
-- ============================================

CREATE TABLE IF NOT EXISTS public.${resource} (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenantid TEXT NOT NULL,
  projectid UUID NOT NULL,

  -- Resource-specific columns
${columns}

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Foreign key constraints
ALTER TABLE public.${resource}
  ADD CONSTRAINT fk_tenant
    FOREIGN KEY (tenantid)
    REFERENCES public.tenants(id)
    ON DELETE CASCADE;

ALTER TABLE public.${resource}
  ADD CONSTRAINT fk_project
    FOREIGN KEY (projectid)
    REFERENCES public.projects(id)
    ON DELETE CASCADE;

-- Enable RLS
ALTER TABLE public.${resource} ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "anon_select_${resource}"
  ON public.${resource} FOR SELECT TO anon
  USING (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    AND projectid = (auth.jwt() ->> 'project_id')::uuid
  );

CREATE POLICY "auth_all_${resource}"
  ON public.${resource} FOR ALL TO authenticated
  USING (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    AND projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  WITH CHECK (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    AND projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_${resource}_tenant_project
  ON public.${resource}(tenantid, projectid);

CREATE INDEX IF NOT EXISTS idx_${resource}_created_at
  ON public.${resource}(created_at DESC);

-- Comments
COMMENT ON TABLE public.${resource} IS '${description}';
COMMENT ON COLUMN public.${resource}.tenantid IS 'FK to tenants.id';
COMMENT ON COLUMN public.${resource}.projectid IS 'FK to projects.id';
`;
  }

  private static pascalCase(str: string): string {
    return str
      .split(/[-_\s]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  private static singularize(str: string): string {
    if (str.endsWith('ies')) return str.slice(0, -3) + 'y';
    if (str.endsWith('es')) return str.slice(0, -2);
    if (str.endsWith('s')) return str.slice(0, -1);
    return str;
  }
}
