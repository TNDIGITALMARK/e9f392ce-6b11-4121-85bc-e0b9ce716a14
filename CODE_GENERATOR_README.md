# 🚀 AI-Powered Code Generator

**Minimize manual coding and accelerate development with intelligent code generation.**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Visual Builder](#visual-builder)
- [Programmatic API](#programmatic-api)
- [Examples](#examples)
- [Advanced Usage](#advanced-usage)

---

## 🎯 Overview

This code generation system eliminates repetitive coding tasks by automatically generating:

- **React Components** (forms, data displays, UI elements)
- **Complete CRUD APIs** (routes, validation, database queries)
- **Full Pages** (landing pages, dashboards, auth pages)
- **Database Migrations** (PostgreSQL with RLS)
- **Complete Features** (component + API + pages combined)

**Key Benefits:**
- ✨ **Reduce coding time by 80%+**
- 🎨 **Consistent code patterns across your app**
- 🔒 **Built-in security and validation**
- 📦 **Production-ready code**
- 🎯 **Type-safe with TypeScript**

---

## ✨ Features

### 1. Component Generator

Generate React components from simple configurations:

- **Basic Components** - Standard React components with props and state
- **Form Components** - Complete forms with validation
- **Data Displays** - Tables, cards, and lists with actions

### 2. API Generator

Create full-stack APIs with one command:

- **CRUD Operations** (GET, POST, PUT, DELETE)
- **Zod Validation** - Type-safe validation schemas
- **Supabase Integration** - Database queries with RLS
- **Authentication** - Optional auth middleware
- **Error Handling** - Comprehensive error responses

### 3. Page Generator

Build complete pages instantly:

- **Landing Pages** - Hero, features, testimonials, CTA
- **Dashboards** - Stats, charts, activity feeds
- **Auth Pages** - Login/signup forms
- **Blog Pages** - Post listings and detail views
- **Profile Pages** - User profile management

### 4. Database Migrations

Automatically generate PostgreSQL migrations:

- **Multi-tenant Schema** - Automatic tenant/project isolation
- **Row Level Security (RLS)** - Built-in security policies
- **Foreign Keys** - Proper relationships
- **Indexes** - Performance optimization

---

## 🚀 Getting Started

### Option 1: Visual Builder (No Code Required)

1. **Open the Builder UI:**
   ```
   http://localhost:4006/builder
   ```

2. **Select what you want to generate:**
   - Component, API, or Page

3. **Configure your settings:**
   - Fill in the form with your requirements

4. **Generate & Download:**
   - Click "Generate" button
   - Copy or download the code
   - Paste into your project

### Option 2: Programmatic Generation

#### Install (Already Available)

The generators are already included in your project at:
```
src/lib/generators/
```

#### Import and Use

```typescript
import { generate } from '@/lib/generators/cli';

// Generate a component
const component = generate.component({
  name: 'UserCard',
  type: 'basic'
});

// Generate an API
const api = generate.api({
  name: 'products',
  fields: {
    name: 'string',
    price: 'number',
    description: 'string'
  }
});

// Generate a page
const page = generate.page({
  name: 'home',
  type: 'landing',
  title: 'Welcome',
  sections: ['hero', 'features', 'cta']
});
```

---

## 🎨 Visual Builder

### Component Builder

**1. Enter Component Name:**
```
ContactForm
```

**2. Select Component Type:**
- Basic Component
- Form Component ✓
- Data Display

**3. Add Fields (for forms):**
```
name      | text
email     | email
message   | textarea
```

**4. Generate!**

The builder will create a complete React component with:
- TypeScript types
- Form state management
- Input validation
- Submit handling
- Professional styling

### API Builder

**1. Enter Resource Name:**
```
products
```

**2. Add Fields:**
```javascript
{
  name: { type: 'string', required: true },
  price: { type: 'number', required: true },
  description: { type: 'string', required: false },
  stock: { type: 'number', required: true }
}
```

**3. Generate!**

The builder creates:
- ✅ API route with CRUD operations
- ✅ Zod validation schema
- ✅ Database query functions
- ✅ PostgreSQL migration file

### Page Builder

**1. Select Page Type:**
- Landing Page ✓
- Dashboard
- Auth Page
- Blog
- Profile

**2. Configure Sections:**
```
☑ Hero
☑ Features
☑ Testimonials
☑ Call to Action
```

**3. Generate!**

Creates a complete page with:
- SEO metadata
- Responsive design
- Section components
- Professional styling

---

## 💻 Programmatic API

### Component Generation

#### Basic Component

```typescript
import { ComponentGenerator } from '@/lib/generators/component-generator';

const code = ComponentGenerator.generate({
  name: 'UserCard',
  description: 'Display user information',
  props: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    avatar: { type: 'string', required: false }
  },
  styling: 'tailwind'
});
```

#### Form Component

```typescript
const formCode = ComponentGenerator.generateForm({
  name: 'ContactForm',
  fields: [
    { name: 'name', type: 'text', label: 'Full Name', required: true },
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'company', type: 'text', label: 'Company', required: false },
    { name: 'message', type: 'textarea', label: 'Message', required: true }
  ],
  onSubmit: 'handleSubmit'
});
```

#### Data Display Component

```typescript
const listCode = ComponentGenerator.generateDataDisplay({
  name: 'ProductList',
  displayType: 'table', // 'card' | 'list' | 'table'
  dataShape: {
    name: 'string',
    price: 'number',
    stock: 'number'
  },
  actions: ['View', 'Edit', 'Delete']
});
```

### API Generation

```typescript
import { APIGenerator } from '@/lib/generators/api-generator';

const api = APIGenerator.generateCRUDAPI({
  resource: 'products',
  description: 'Product catalog management',
  schema: {
    name: { type: 'string', required: true, description: 'Product name' },
    price: { type: 'number', required: true, description: 'Price in cents' },
    description: { type: 'string', required: false },
    category: { type: 'string', required: true },
    stock: { type: 'number', required: true },
    published: { type: 'boolean', required: false }
  },
  authentication: true,
  validation: true,
  database: 'supabase'
});

// Returns:
// - api['route.ts'] - Next.js API route
// - api['schema.ts'] - Zod validation
// - api['queries.ts'] - Database queries
```

#### Generate Migration

```typescript
const migration = APIGenerator.generateMigration({
  resource: 'products',
  description: 'Product catalog',
  schema: { /* same as above */ }
});

// Apply migration via HTTP:
const response = await fetch('http://localhost:3006/api/supabase/migrations/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'create_products_table',
    sql: migration
  })
});
```

### Page Generation

```typescript
import { PageGenerator } from '@/lib/generators/page-generator';

const landingPage = PageGenerator.generate({
  name: 'home',
  title: 'Welcome to Our Platform',
  description: 'Build amazing products with our tools',
  layout: 'landing',
  sections: ['hero', 'features', 'testimonials', 'cta'],
  seo: {
    title: 'Home | MyApp',
    description: 'The best platform for...',
    keywords: ['saas', 'platform', 'tools']
  }
});
```

---

## 📚 Examples

### Example 1: Contact Form

```typescript
import { generate } from '@/lib/generators/cli';

const contactForm = generate.component({
  name: 'ContactForm',
  type: 'form',
  fields: [
    { name: 'name', type: 'text', label: 'Full Name', required: true },
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'phone', type: 'text', label: 'Phone', required: false },
    { name: 'message', type: 'textarea', label: 'Message', required: true }
  ]
});

// Save to file:
// src/components/contact-form.tsx
```

### Example 2: Blog API

```typescript
const blogAPI = generate.api({
  name: 'posts',
  description: 'Blog posts management',
  fields: {
    title: { type: 'string', required: true, description: 'Post title' },
    slug: { type: 'string', required: true, description: 'URL slug' },
    content: { type: 'string', required: true, description: 'Post content' },
    excerpt: { type: 'string', required: false, description: 'Short summary' },
    published: { type: 'boolean', required: false, description: 'Published status' },
    author_id: { type: 'string', required: true, description: 'Author user ID' },
    published_at: { type: 'date', required: false, description: 'Publication date' }
  }
});

// Creates:
// - src/app/api/posts/route.ts
// - src/app/api/posts/posts-schema.ts
// - src/app/api/posts/posts-queries.ts
// - supabase/migrations/XXXXXX_create_posts_table.sql
```

### Example 3: Product Catalog Feature

```typescript
const productFeature = generate.feature({
  name: 'product',
  fields: {
    name: 'string',
    description: 'string',
    price: 'number',
    category: 'string',
    stock: 'number',
    image_url: 'url',
    featured: 'boolean'
  },
  includeForm: true,
  includeListing: true
});

// Generates complete feature:
// - Product component
// - ProductForm component
// - ProductList component
// - Complete CRUD API
// - List page
// - Create page
// - Database migration
```

### Example 4: Dashboard Page

```typescript
const dashboard = generate.page({
  name: 'dashboard',
  type: 'dashboard',
  title: 'Analytics Dashboard',
  description: 'View your key metrics and insights'
});

// Creates:
// - src/app/dashboard/page.tsx
// With: Stats cards, charts, activity feed, quick actions
```

---

## 🔧 Advanced Usage

### Custom Templates

Create custom component templates:

```typescript
import { ComponentGenerator } from '@/lib/generators/component-generator';

// Extend the generator
class MyCustomGenerator extends ComponentGenerator {
  static generateMyCustomComponent(config: any): string {
    // Your custom generation logic
    return `
      // Your custom template
    `;
  }
}
```

### Batch Generation

Generate multiple related items:

```typescript
const feature = {
  name: 'task',
  fields: {
    title: 'string',
    description: 'string',
    status: 'string',
    priority: 'string',
    assigned_to: 'string',
    due_date: 'date'
  }
};

// Generate everything at once
const taskComponent = generate.component({ name: 'Task', type: 'basic' });
const taskForm = generate.component({
  name: 'TaskForm',
  type: 'form',
  fields: Object.keys(feature.fields).map(name => ({ name, type: 'text' }))
});
const taskAPI = generate.api(feature);
const taskListPage = generate.page({
  name: 'tasks',
  type: 'dashboard',
  title: 'Task Manager'
});
```

### CLI Integration

Create scripts to automate generation:

```typescript
// scripts/generate.ts
import { generate } from '@/lib/generators/cli';
import fs from 'fs';
import path from 'path';

const config = JSON.parse(fs.readFileSync('./generator-config.json', 'utf-8'));

// Generate component
const component = generate.component(config.component);
fs.writeFileSync(
  path.join('src/components', `${config.component.name}.tsx`),
  component
);

// Generate API
const api = generate.api(config.api);
const apiDir = path.join('src/app/api', config.api.name);
fs.mkdirSync(apiDir, { recursive: true });
fs.writeFileSync(path.join(apiDir, 'route.ts'), api.route);
fs.writeFileSync(path.join(apiDir, 'schema.ts'), api.schema);
fs.writeFileSync(path.join(apiDir, 'queries.ts'), api.queries);

console.log('✅ Code generation complete!');
```

---

## 🎯 Quick Reference

### Component Types

| Type | Description | Use Case |
|------|-------------|----------|
| `basic` | Standard React component | UI elements, containers |
| `form` | Form with validation | User input, data entry |
| `data-display` | Table/Card/List view | Display data collections |

### Page Types

| Type | Sections | Use Case |
|------|----------|----------|
| `landing` | Hero, Features, CTA | Marketing pages |
| `dashboard` | Stats, Charts, Actions | Admin panels |
| `auth` | Login/Signup forms | Authentication |
| `blog` | Post listings | Content sites |
| `profile` | User details, settings | Account management |

### Field Types

| Type | Validation | Database Type |
|------|-----------|---------------|
| `string` | Basic string | TEXT |
| `email` | Email format | TEXT |
| `url` | URL format | TEXT |
| `number` | Numeric | INTEGER |
| `boolean` | True/false | BOOLEAN |
| `date` | ISO datetime | TIMESTAMPTZ |

---

## 🌟 Best Practices

1. **Start with the Visual Builder** - Get familiar with the system
2. **Use Descriptive Names** - Make components/APIs self-documenting
3. **Generate Early, Refine Later** - Get scaffolding quickly, customize as needed
4. **Keep Configurations** - Save your generator configs for future reference
5. **Review Generated Code** - Understand what's being created
6. **Test Immediately** - Verify generated code works before customizing

---

## 🚦 Next Steps

1. **Try the Visual Builder:**
   - Visit http://localhost:4006/builder
   - Generate a simple form
   - See the results instantly

2. **Generate Your First API:**
   - Pick a resource you need
   - Define the fields
   - Generate the complete CRUD API

3. **Build a Complete Feature:**
   - Use `generate.feature()`
   - Get component + API + pages
   - Customize to your needs

4. **Explore Examples:**
   - Check the `/builder` page for quick examples
   - Try the pre-configured templates
   - Modify and experiment

---

## 💡 Tips & Tricks

- **Combine Generators**: Use component + API + page together for complete features
- **Save Configurations**: Keep your generator configs in version control
- **Customize After Generation**: Generated code is a starting point - make it yours
- **Use TypeScript**: All generated code is type-safe
- **Follow Patterns**: Generated code follows best practices - use as a template

---

## 📞 Support

For issues or questions:
1. Check the examples above
2. Review generated code comments
3. Visit the `/builder` page for interactive help

---

**🎉 Happy Generating! Build faster, code smarter.**
