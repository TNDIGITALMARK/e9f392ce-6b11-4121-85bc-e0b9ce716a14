/**
 * AI-Powered Component Generator
 * Generates React components from natural language descriptions
 */

export interface ComponentConfig {
  name: string;
  description: string;
  props?: Record<string, { type: string; required: boolean; default?: any }>;
  state?: Record<string, { type: string; initial: any }>;
  styling?: 'tailwind' | 'css' | 'styled';
  features?: string[];
}

export class ComponentGenerator {
  /**
   * Generate a complete React component from configuration
   */
  static generate(config: ComponentConfig): string {
    const {
      name,
      description,
      props = {},
      state = {},
      styling = 'tailwind',
      features = [],
    } = config;

    const componentName = this.pascalCase(name);
    const hasState = Object.keys(state).length > 0;
    const hasProps = Object.keys(props).length > 0;

    // Generate imports
    const imports = this.generateImports(hasState, features);

    // Generate prop types
    const propsInterface = hasProps
      ? this.generatePropsInterface(componentName, props)
      : '';

    // Generate state hooks
    const stateHooks = this.generateStateHooks(state);

    // Generate component body
    const componentBody = this.generateComponentBody(
      componentName,
      description,
      hasProps,
      stateHooks,
      features,
      styling
    );

    return `${imports}\n\n${propsInterface}${componentBody}`;
  }

  /**
   * Generate necessary imports based on component needs
   */
  private static generateImports(hasState: boolean, features: string[]): string {
    const imports: string[] = [];

    if (hasState || features.includes('form') || features.includes('animation')) {
      const hooks = ['useState'];
      if (features.includes('form')) hooks.push('useCallback');
      if (features.includes('animation')) hooks.push('useEffect');
      imports.push(`import { ${hooks.join(', ')} } from 'react';`);
    }

    if (features.includes('icons')) {
      imports.push(`import { Check, X, AlertCircle } from 'lucide-react';`);
    }

    if (features.includes('ui')) {
      imports.push(`import { Button } from '@/components/ui/button';`);
      imports.push(`import { Card } from '@/components/ui/card';`);
    }

    return imports.join('\n');
  }

  /**
   * Generate TypeScript interface for props
   */
  private static generatePropsInterface(
    componentName: string,
    props: Record<string, { type: string; required: boolean; default?: any }>
  ): string {
    const propLines = Object.entries(props).map(([key, config]) => {
      const optional = config.required ? '' : '?';
      return `  ${key}${optional}: ${config.type};`;
    });

    return `interface ${componentName}Props {\n${propLines.join('\n')}\n}\n\n`;
  }

  /**
   * Generate state hooks
   */
  private static generateStateHooks(
    state: Record<string, { type: string; initial: any }>
  ): string {
    return Object.entries(state)
      .map(([key, config]) => {
        const initial =
          typeof config.initial === 'string'
            ? `'${config.initial}'`
            : JSON.stringify(config.initial);
        return `  const [${key}, set${this.pascalCase(key)}] = useState<${config.type}>(${initial});`;
      })
      .join('\n');
  }

  /**
   * Generate main component body
   */
  private static generateComponentBody(
    componentName: string,
    description: string,
    hasProps: boolean,
    stateHooks: string,
    features: string[],
    styling: string
  ): string {
    const propsParam = hasProps ? `props: ${componentName}Props` : '';
    const destructure = hasProps ? `\n  const { } = props;\n` : '';

    return `/**
 * ${componentName}
 * ${description}
 */
export function ${componentName}(${propsParam}) {
${destructure}${stateHooks ? stateHooks + '\n' : ''}
  return (
    <div className="w-full">
      {/* Component content */}
      <h2 className="text-2xl font-bold mb-4">${componentName}</h2>
      <p className="text-gray-600">${description}</p>
    </div>
  );
}
`;
  }

  /**
   * Convert string to PascalCase
   */
  private static pascalCase(str: string): string {
    return str
      .split(/[-_\s]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  /**
   * Generate a form component with validation
   */
  static generateForm(config: {
    name: string;
    fields: Array<{
      name: string;
      type: 'text' | 'email' | 'number' | 'textarea' | 'select';
      label: string;
      required?: boolean;
      options?: string[];
    }>;
    onSubmit: string;
  }): string {
    const { name, fields } = config;
    const componentName = this.pascalCase(name);

    const stateInit = fields
      .map((f) => `    ${f.name}: '',`)
      .join('\n');

    const fieldElements = fields
      .map((field) => {
        if (field.type === 'select' && field.options) {
          return `
        <div key="${field.name}" className="space-y-2">
          <label htmlFor="${field.name}" className="text-sm font-medium">
            ${field.label}${field.required ? ' *' : ''}
          </label>
          <select
            id="${field.name}"
            name="${field.name}"
            value={formData.${field.name}}
            onChange={handleChange}
            required={${field.required || false}}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="">Select ${field.label}</option>
            ${field.options.map((opt) => `<option value="${opt}">${opt}</option>`).join('\n            ')}
          </select>
        </div>`;
        }

        return `
        <div key="${field.name}" className="space-y-2">
          <label htmlFor="${field.name}" className="text-sm font-medium">
            ${field.label}${field.required ? ' *' : ''}
          </label>
          <${field.type === 'textarea' ? 'textarea' : 'input'}
            ${field.type !== 'textarea' ? `type="${field.type}"` : ''}
            id="${field.name}"
            name="${field.name}"
            value={formData.${field.name}}
            onChange={handleChange}
            required={${field.required || false}}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            ${field.type === 'textarea' ? 'rows={4}' : ''}
          />
        </div>`;
      })
      .join('\n');

    return `import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ${componentName}Data {
${fields.map((f) => `  ${f.name}: string;`).join('\n')}
}

export function ${componentName}() {
  const [formData, setFormData] = useState<${componentName}Data>({
${stateInit}
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">${name}</h2>
      ${fieldElements}

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
`;
  }

  /**
   * Generate a data display component (card, list, table)
   */
  static generateDataDisplay(config: {
    name: string;
    displayType: 'card' | 'list' | 'table';
    dataShape: Record<string, string>;
    actions?: string[];
  }): string {
    const { name, displayType, dataShape, actions = [] } = config;
    const componentName = this.pascalCase(name);
    const itemType = `${componentName}Item`;

    const fields = Object.entries(dataShape);

    let displayCode = '';

    if (displayType === 'card') {
      displayCode = `
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            ${fields
              .map(
                ([key, type]) =>
                  `<div className="mb-2">
              <span className="text-sm font-semibold text-gray-600">${this.pascalCase(key)}:</span>
              <span className="ml-2">{item.${key}}</span>
            </div>`
              )
              .join('\n            ')}
            ${actions.length > 0 ? `<div className="mt-4 flex gap-2">\n              ${actions.map((a) => `<Button size="sm">${a}</Button>`).join('\n              ')}\n            </div>` : ''}
          </div>
        ))}
      </div>`;
    } else if (displayType === 'table') {
      displayCode = `
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              ${fields.map(([key]) => `<th className="px-6 py-3 text-left text-sm font-semibold">${this.pascalCase(key)}</th>`).join('\n              ')}
              ${actions.length > 0 ? '<th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>' : ''}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                ${fields.map(([key]) => `<td className="px-6 py-4">{item.${key}}</td>`).join('\n                ')}
                ${actions.length > 0 ? `<td className="px-6 py-4 flex gap-2">\n                  ${actions.map((a) => `<Button size="sm" variant="outline">${a}</Button>`).join('\n                  ')}\n                </td>` : ''}
              </tr>
            ))}
          </tbody>
        </table>
      </div>`;
    } else {
      displayCode = `
      <ul className="space-y-4">
        {data.map((item, idx) => (
          <li key={idx} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <div>
              ${fields
                .map(
                  ([key]) =>
                    `<div><span className="font-semibold">${this.pascalCase(key)}:</span> {item.${key}}</div>`
                )
                .join('\n              ')}
            </div>
            ${actions.length > 0 ? `<div className="flex gap-2">\n              ${actions.map((a) => `<Button size="sm">${a}</Button>`).join('\n              ')}\n            </div>` : ''}
          </li>
        ))}
      </ul>`;
    }

    return `import { Button } from '@/components/ui/button';

interface ${itemType} {
${fields.map(([key, type]) => `  ${key}: ${type};`).join('\n')}
}

interface ${componentName}Props {
  data: ${itemType}[];
}

export function ${componentName}({ data }: ${componentName}Props) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">${name}</h2>
      ${displayCode}
    </div>
  );
}
`;
  }
}
