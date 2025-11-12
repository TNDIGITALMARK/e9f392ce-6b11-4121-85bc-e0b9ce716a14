#!/usr/bin/env node
/**
 * Code Generation CLI
 * Interactive command-line tool for generating components, pages, and APIs
 */

import { ComponentGenerator } from './component-generator';
import { APIGenerator } from './api-generator';
import { PageGenerator } from './page-generator';

export class GeneratorCLI {
  /**
   * Generate a component from simple configuration
   */
  static generateComponent(config: {
    name: string;
    type?: 'basic' | 'form' | 'data-display';
    fields?: any[];
  }): string {
    const { name, type = 'basic', fields = [] } = config;

    if (type === 'form') {
      return ComponentGenerator.generateForm({
        name,
        fields: fields.map((f) => ({
          name: f.name || f,
          type: f.type || 'text',
          label: f.label || this.toTitleCase(f.name || f),
          required: f.required !== false,
          options: f.options,
        })),
        onSubmit: 'handleSubmit',
      });
    }

    if (type === 'data-display') {
      const dataShape: Record<string, string> = {};
      fields.forEach((f) => {
        dataShape[f.name || f] = f.type || 'string';
      });

      return ComponentGenerator.generateDataDisplay({
        name,
        displayType: 'card',
        dataShape,
        actions: ['View', 'Edit'],
      });
    }

    return ComponentGenerator.generate({
      name,
      description: `${name} component`,
      styling: 'tailwind',
    });
  }

  /**
   * Generate a complete API with database migration
   */
  static generateAPI(config: {
    name: string;
    fields: Record<string, { type: string; required?: boolean; description?: string }>;
    description?: string;
  }): { route: string; schema: string; queries: string; migration: string } {
    const { name, fields, description = `${name} resource` } = config;

    const schema = Object.entries(fields).reduce((acc, [key, value]) => {
      acc[key] = {
        type: typeof value === 'string' ? value : value.type,
        required: typeof value === 'string' ? true : value.required !== false,
        description: typeof value === 'object' ? value.description : undefined,
      };
      return acc;
    }, {} as Record<string, any>);

    const apiConfig = {
      resource: name,
      description,
      schema,
      authentication: true,
      validation: true,
      database: 'supabase' as const,
    };

    const files = APIGenerator.generateCRUDAPI(apiConfig);
    const migration = APIGenerator.generateMigration(apiConfig);

    return {
      route: files['route.ts'],
      schema: files['schema.ts'],
      queries: files['queries.ts'],
      migration,
    };
  }

  /**
   * Generate a complete page
   */
  static generatePage(config: {
    name: string;
    type?: 'landing' | 'dashboard' | 'auth' | 'blog' | 'profile';
    title?: string;
    description?: string;
    sections?: string[];
  }): string {
    const {
      name,
      type = 'landing',
      title = this.toTitleCase(name),
      description = `${title} page`,
      sections = type === 'landing' ? ['hero', 'features', 'cta'] : [],
    } = config;

    return PageGenerator.generate({
      name,
      title,
      description,
      layout: type,
      sections,
      seo: { title, description },
    });
  }

  /**
   * Generate a complete feature (component + API + page)
   */
  static generateFeature(config: {
    name: string;
    fields: Record<string, any>;
    includeForm?: boolean;
    includeListing?: boolean;
    includeDetail?: boolean;
  }): {
    component: string;
    form?: string;
    listing?: string;
    api: { route: string; schema: string; queries: string; migration: string };
    pages: { list?: string; detail?: string; create?: string };
  } {
    const { name, fields, includeForm = true, includeListing = true } = config;

    // Generate API
    const api = this.generateAPI({ name, fields });

    // Generate components
    const component = this.generateComponent({ name, type: 'basic' });

    const form = includeForm
      ? ComponentGenerator.generateForm({
          name: `${name}Form`,
          fields: Object.entries(fields).map(([key, config]) => ({
            name: key,
            type: typeof config === 'string' ? config : config.type,
            label: this.toTitleCase(key),
            required: true,
          })),
          onSubmit: 'handleSubmit',
        })
      : undefined;

    const listing = includeListing
      ? ComponentGenerator.generateDataDisplay({
          name: `${name}List`,
          displayType: 'table',
          dataShape: Object.entries(fields).reduce((acc, [key, config]) => {
            acc[key] = typeof config === 'string' ? config : config.type;
            return acc;
          }, {} as Record<string, string>),
          actions: ['View', 'Edit', 'Delete'],
        })
      : undefined;

    // Generate pages
    const listPage = includeListing
      ? `import { ${name}List } from '@/components/${name.toLowerCase()}-list';

export default function ${name}ListPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">${this.toTitleCase(name)}s</h1>
          <a href="/${name.toLowerCase()}/create">
            <button>Create New</button>
          </a>
        </div>
        <${name}List data={[]} />
      </div>
    </div>
  );
}
`
      : undefined;

    const createPage = includeForm
      ? `import { ${name}Form } from '@/components/${name.toLowerCase()}-form';

export default function Create${name}Page() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create ${this.toTitleCase(name)}</h1>
        <${name}Form />
      </div>
    </div>
  );
}
`
      : undefined;

    return {
      component,
      form,
      listing,
      api,
      pages: {
        list: listPage,
        create: createPage,
      },
    };
  }

  /**
   * Quick generate examples
   */
  static examples = {
    // Generate a contact form
    contactForm: () =>
      GeneratorCLI.generateComponent({
        name: 'ContactForm',
        type: 'form',
        fields: [
          { name: 'name', type: 'text', label: 'Full Name', required: true },
          { name: 'email', type: 'email', label: 'Email Address', required: true },
          { name: 'message', type: 'textarea', label: 'Message', required: true },
        ],
      }),

    // Generate a blog API
    blogAPI: () =>
      GeneratorCLI.generateAPI({
        name: 'posts',
        description: 'Blog posts with author and content',
        fields: {
          title: { type: 'string', required: true, description: 'Post title' },
          content: { type: 'string', required: true, description: 'Post content' },
          slug: { type: 'string', required: true, description: 'URL slug' },
          published: { type: 'boolean', required: false, description: 'Published status' },
          author_id: { type: 'string', required: true, description: 'Author user ID' },
        },
      }),

    // Generate a landing page
    landingPage: () =>
      GeneratorCLI.generatePage({
        name: 'home',
        type: 'landing',
        title: 'Welcome to Our Platform',
        description: 'Build amazing things with our platform',
        sections: ['hero', 'features', 'testimonials', 'cta'],
      }),

    // Generate a complete product feature
    productFeature: () =>
      GeneratorCLI.generateFeature({
        name: 'product',
        fields: {
          name: 'string',
          description: 'string',
          price: 'number',
          stock: 'number',
          category: 'string',
        },
        includeForm: true,
        includeListing: true,
      }),
  };

  /**
   * Helper: Convert to Title Case
   */
  private static toTitleCase(str: string): string {
    return str
      .split(/[-_\s]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}

// Export for use in other modules
export { ComponentGenerator, APIGenerator, PageGenerator };

// Export convenience functions
export const generate = {
  component: (config: any) => GeneratorCLI.generateComponent(config),
  api: (config: any) => GeneratorCLI.generateAPI(config),
  page: (config: any) => GeneratorCLI.generatePage(config),
  feature: (config: any) => GeneratorCLI.generateFeature(config),
};
