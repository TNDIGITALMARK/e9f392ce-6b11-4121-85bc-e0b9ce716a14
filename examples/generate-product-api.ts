/**
 * Example: Generate a Complete Product API
 *
 * This example creates a full CRUD API for product management
 * including database migration, validation, and queries.
 */

import { generate } from '@/lib/generators/cli';
import fs from 'fs';
import path from 'path';

// Generate complete product API
const productAPI = generate.api({
  name: 'products',
  description: 'E-commerce product catalog management',
  fields: {
    name: {
      type: 'string',
      required: true,
      description: 'Product name'
    },
    slug: {
      type: 'string',
      required: true,
      description: 'URL-friendly product identifier'
    },
    description: {
      type: 'string',
      required: false,
      description: 'Product description'
    },
    price: {
      type: 'number',
      required: true,
      description: 'Price in cents'
    },
    compare_price: {
      type: 'number',
      required: false,
      description: 'Original price for comparison'
    },
    category: {
      type: 'string',
      required: true,
      description: 'Product category'
    },
    stock: {
      type: 'number',
      required: true,
      description: 'Available quantity'
    },
    sku: {
      type: 'string',
      required: false,
      description: 'Stock keeping unit'
    },
    image_url: {
      type: 'url',
      required: false,
      description: 'Main product image URL'
    },
    published: {
      type: 'boolean',
      required: false,
      description: 'Published status'
    }
  }
});

console.log('🛍️  Product API Generated!');
console.log('\n=== API Route ===\n');
console.log(productAPI.route);
console.log('\n=== Validation Schema ===\n');
console.log(productAPI.schema);
console.log('\n=== Database Queries ===\n');
console.log(productAPI.queries);
console.log('\n=== Database Migration ===\n');
console.log(productAPI.migration);

// Save to files
const apiDir = path.join(process.cwd(), 'src/app/api/products');
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

fs.writeFileSync(path.join(apiDir, 'route.ts'), productAPI.route);
fs.writeFileSync(path.join(apiDir, 'products-schema.ts'), productAPI.schema);
fs.writeFileSync(path.join(apiDir, 'products-queries.ts'), productAPI.queries);

const migrationDir = path.join(process.cwd(), 'supabase/migrations');
if (!fs.existsSync(migrationDir)) {
  fs.mkdirSync(migrationDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 14);
fs.writeFileSync(
  path.join(migrationDir, `${timestamp}_create_products_table.sql`),
  productAPI.migration
);

console.log('\n✅ Files Created:');
console.log(`   - ${apiDir}/route.ts`);
console.log(`   - ${apiDir}/products-schema.ts`);
console.log(`   - ${apiDir}/products-queries.ts`);
console.log(`   - ${migrationDir}/${timestamp}_create_products_table.sql`);

console.log('\n📋 Next Steps:');
console.log('1. Review the generated migration file');
console.log('2. Apply the migration:');
console.log('   POST http://localhost:3006/api/supabase/migrations/execute');
console.log('3. Test your API endpoints:');
console.log('   GET    /api/products       - List all products');
console.log('   GET    /api/products?id=X  - Get one product');
console.log('   POST   /api/products       - Create product');
console.log('   PUT    /api/products       - Update product');
console.log('   DELETE /api/products?id=X  - Delete product');
