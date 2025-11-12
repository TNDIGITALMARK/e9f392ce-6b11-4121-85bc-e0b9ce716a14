'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generate } from '@/lib/generators/cli';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Code, Sparkles } from 'lucide-react';

export default function BuilderPage() {
  const [generatedCode, setGeneratedCode] = useState('');
  const [activeTab, setActiveTab] = useState('component');

  // Component Form State
  const [componentConfig, setComponentConfig] = useState({
    name: '',
    type: 'basic' as 'basic' | 'form' | 'data-display',
    fields: [] as any[],
  });

  // API Form State
  const [apiConfig, setApiConfig] = useState({
    name: '',
    description: '',
    fields: {} as Record<string, any>,
  });

  // Page Form State
  const [pageConfig, setPageConfig] = useState({
    name: '',
    type: 'landing' as 'landing' | 'dashboard' | 'auth' | 'blog' | 'profile',
    title: '',
    description: '',
    sections: [] as string[],
  });

  const handleGenerateComponent = () => {
    try {
      const code = generate.component(componentConfig);
      setGeneratedCode(code);
    } catch (error) {
      console.error('Generation error:', error);
      alert('Error generating component. Please check your configuration.');
    }
  };

  const handleGenerateAPI = () => {
    try {
      const result = generate.api(apiConfig);
      const combined = `
// ===== API Route (route.ts) =====
${result.route}

// ===== Schema Validation (schema.ts) =====
${result.schema}

// ===== Database Queries (queries.ts) =====
${result.queries}

// ===== Database Migration (migration.sql) =====
${result.migration}
`;
      setGeneratedCode(combined);
    } catch (error) {
      console.error('Generation error:', error);
      alert('Error generating API. Please check your configuration.');
    }
  };

  const handleGeneratePage = () => {
    try {
      const code = generate.page(pageConfig);
      setGeneratedCode(code);
    } catch (error) {
      console.error('Generation error:', error);
      alert('Error generating page. Please check your configuration.');
    }
  };

  const addField = () => {
    if (activeTab === 'component') {
      setComponentConfig({
        ...componentConfig,
        fields: [...componentConfig.fields, { name: '', type: 'text', label: '', required: true }],
      });
    } else if (activeTab === 'api') {
      const fieldName = prompt('Enter field name:');
      if (fieldName) {
        setApiConfig({
          ...apiConfig,
          fields: {
            ...apiConfig.fields,
            [fieldName]: { type: 'string', required: true },
          },
        });
      }
    }
  };

  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-code.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Code Generator
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Generate production-ready components, APIs, and pages in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Configuration
            </h2>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="component">Component</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
                <TabsTrigger value="page">Page</TabsTrigger>
              </TabsList>

              {/* Component Configuration */}
              <TabsContent value="component" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Component Name</label>
                  <input
                    type="text"
                    value={componentConfig.name}
                    onChange={(e) =>
                      setComponentConfig({ ...componentConfig, name: e.target.value })
                    }
                    placeholder="e.g., ContactForm, ProductCard"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Component Type</label>
                  <select
                    value={componentConfig.type}
                    onChange={(e) =>
                      setComponentConfig({
                        ...componentConfig,
                        type: e.target.value as any,
                      })
                    }
                    className="w-full"
                  >
                    <option value="basic">Basic Component</option>
                    <option value="form">Form Component</option>
                    <option value="data-display">Data Display</option>
                  </select>
                </div>

                {(componentConfig.type === 'form' ||
                  componentConfig.type === 'data-display') && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium">Fields</label>
                      <Button onClick={addField} size="sm" variant="outline">
                        Add Field
                      </Button>
                    </div>

                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {componentConfig.fields.map((field, idx) => (
                        <div key={idx} className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Field name"
                            value={field.name}
                            onChange={(e) => {
                              const newFields = [...componentConfig.fields];
                              newFields[idx].name = e.target.value;
                              setComponentConfig({ ...componentConfig, fields: newFields });
                            }}
                            className="flex-1"
                          />
                          <select
                            value={field.type}
                            onChange={(e) => {
                              const newFields = [...componentConfig.fields];
                              newFields[idx].type = e.target.value;
                              setComponentConfig({ ...componentConfig, fields: newFields });
                            }}
                            className="w-32"
                          >
                            <option value="text">Text</option>
                            <option value="email">Email</option>
                            <option value="number">Number</option>
                            <option value="textarea">Textarea</option>
                            <option value="select">Select</option>
                          </select>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => {
                              const newFields = componentConfig.fields.filter(
                                (_, i) => i !== idx
                              );
                              setComponentConfig({ ...componentConfig, fields: newFields });
                            }}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button onClick={handleGenerateComponent} className="w-full">
                  Generate Component
                </Button>
              </TabsContent>

              {/* API Configuration */}
              <TabsContent value="api" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Resource Name</label>
                  <input
                    type="text"
                    value={apiConfig.name}
                    onChange={(e) => setApiConfig({ ...apiConfig, name: e.target.value })}
                    placeholder="e.g., products, users, posts"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <input
                    type="text"
                    value={apiConfig.description}
                    onChange={(e) =>
                      setApiConfig({ ...apiConfig, description: e.target.value })
                    }
                    placeholder="Brief description of this resource"
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Fields</label>
                    <Button onClick={addField} size="sm" variant="outline">
                      Add Field
                    </Button>
                  </div>

                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {Object.entries(apiConfig.fields).map(([name, config]) => (
                      <div key={name} className="flex items-center gap-2 bg-muted p-2 rounded">
                        <span className="flex-1 font-medium">{name}</span>
                        <span className="text-sm text-muted-foreground">
                          {typeof config === 'string' ? config : config.type}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            const newFields = { ...apiConfig.fields };
                            delete newFields[name];
                            setApiConfig({ ...apiConfig, fields: newFields });
                          }}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button onClick={handleGenerateAPI} className="w-full">
                  Generate API
                </Button>
              </TabsContent>

              {/* Page Configuration */}
              <TabsContent value="page" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Page Name</label>
                  <input
                    type="text"
                    value={pageConfig.name}
                    onChange={(e) => setPageConfig({ ...pageConfig, name: e.target.value })}
                    placeholder="e.g., home, about, dashboard"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Page Type</label>
                  <select
                    value={pageConfig.type}
                    onChange={(e) =>
                      setPageConfig({ ...pageConfig, type: e.target.value as any })
                    }
                    className="w-full"
                  >
                    <option value="landing">Landing Page</option>
                    <option value="dashboard">Dashboard</option>
                    <option value="auth">Auth Page</option>
                    <option value="blog">Blog</option>
                    <option value="profile">Profile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={pageConfig.title}
                    onChange={(e) => setPageConfig({ ...pageConfig, title: e.target.value })}
                    placeholder="Page title"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={pageConfig.description}
                    onChange={(e) =>
                      setPageConfig({ ...pageConfig, description: e.target.value })
                    }
                    placeholder="Page description for SEO"
                    className="w-full"
                    rows={3}
                  />
                </div>

                <Button onClick={handleGeneratePage} className="w-full">
                  Generate Page
                </Button>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Code Preview Panel */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Generated Code
              </h2>
              <div className="flex gap-2">
                <Button onClick={copyToClipboard} size="sm" variant="outline">
                  Copy
                </Button>
                <Button onClick={downloadCode} size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-[600px] text-sm">
                <code>{generatedCode || '// Your generated code will appear here...'}</code>
              </pre>
            </div>
          </Card>
        </div>

        {/* Quick Examples */}
        <Card className="mt-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              onClick={() => {
                setActiveTab('component');
                setComponentConfig({
                  name: 'ContactForm',
                  type: 'form',
                  fields: [
                    { name: 'name', type: 'text', label: 'Name', required: true },
                    { name: 'email', type: 'email', label: 'Email', required: true },
                    { name: 'message', type: 'textarea', label: 'Message', required: true },
                  ],
                });
              }}
            >
              Contact Form
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setActiveTab('api');
                setApiConfig({
                  name: 'products',
                  description: 'Product catalog management',
                  fields: {
                    name: { type: 'string', required: true },
                    price: { type: 'number', required: true },
                    description: { type: 'string', required: false },
                    stock: { type: 'number', required: true },
                  },
                });
              }}
            >
              Product API
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setActiveTab('page');
                setPageConfig({
                  name: 'home',
                  type: 'landing',
                  title: 'Welcome Home',
                  description: 'Your amazing landing page',
                  sections: ['hero', 'features', 'cta'],
                });
              }}
            >
              Landing Page
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setActiveTab('page');
                setPageConfig({
                  name: 'dashboard',
                  type: 'dashboard',
                  title: 'Dashboard',
                  description: 'Your analytics dashboard',
                  sections: [],
                });
              }}
            >
              Dashboard
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
