/**
 * Example: Generate a Complete Feature
 *
 * This example generates everything needed for a task management feature:
 * - Component
 * - Form
 * - List view
 * - Complete API with CRUD
 * - Pages (list, create)
 * - Database migration
 */

import { GeneratorCLI } from '@/lib/generators/cli';
import fs from 'fs';
import path from 'path';

console.log('🎯 Generating Complete Task Management Feature...\n');

// Generate complete task feature
const taskFeature = GeneratorCLI.generateFeature({
  name: 'task',
  fields: {
    title: { type: 'string', required: true, description: 'Task title' },
    description: { type: 'string', required: false, description: 'Task description' },
    status: {
      type: 'string',
      required: true,
      description: 'Task status: todo, in_progress, done'
    },
    priority: {
      type: 'string',
      required: true,
      description: 'Priority: low, medium, high, urgent'
    },
    assigned_to: { type: 'string', required: false, description: 'Assigned user ID' },
    due_date: { type: 'date', required: false, description: 'Due date' }
  },
  includeForm: true,
  includeListing: true
});

console.log('✅ Feature Generated!\n');

// Create directory structure
const baseDir = path.join(process.cwd(), 'src/generated/tasks');
const componentsDir = path.join(baseDir, 'components');
const pagesDir = path.join(baseDir, 'pages');
const apiDir = path.join(baseDir, 'api');

[componentsDir, pagesDir, apiDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Save components
fs.writeFileSync(
  path.join(componentsDir, 'task.tsx'),
  taskFeature.component
);

if (taskFeature.form) {
  fs.writeFileSync(
    path.join(componentsDir, 'task-form.tsx'),
    taskFeature.form
  );
}

if (taskFeature.listing) {
  fs.writeFileSync(
    path.join(componentsDir, 'task-list.tsx'),
    taskFeature.listing
  );
}

// Save API files
fs.writeFileSync(
  path.join(apiDir, 'route.ts'),
  taskFeature.api.route
);
fs.writeFileSync(
  path.join(apiDir, 'tasks-schema.ts'),
  taskFeature.api.schema
);
fs.writeFileSync(
  path.join(apiDir, 'tasks-queries.ts'),
  taskFeature.api.queries
);

// Save pages
if (taskFeature.pages.list) {
  fs.writeFileSync(
    path.join(pagesDir, 'tasks-page.tsx'),
    taskFeature.pages.list
  );
}

if (taskFeature.pages.create) {
  fs.writeFileSync(
    path.join(pagesDir, 'create-task-page.tsx'),
    taskFeature.pages.create
  );
}

// Save migration
const migrationDir = path.join(process.cwd(), 'supabase/migrations');
if (!fs.existsSync(migrationDir)) {
  fs.mkdirSync(migrationDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 14);
fs.writeFileSync(
  path.join(migrationDir, `${timestamp}_create_tasks_table.sql`),
  taskFeature.api.migration
);

console.log('📁 Generated Files:\n');
console.log('Components:');
console.log(`  ✓ ${componentsDir}/task.tsx`);
console.log(`  ✓ ${componentsDir}/task-form.tsx`);
console.log(`  ✓ ${componentsDir}/task-list.tsx`);
console.log('\nPages:');
console.log(`  ✓ ${pagesDir}/tasks-page.tsx`);
console.log(`  ✓ ${pagesDir}/create-task-page.tsx`);
console.log('\nAPI:');
console.log(`  ✓ ${apiDir}/route.ts`);
console.log(`  ✓ ${apiDir}/tasks-schema.ts`);
console.log(`  ✓ ${apiDir}/tasks-queries.ts`);
console.log('\nDatabase:');
console.log(`  ✓ ${migrationDir}/${timestamp}_create_tasks_table.sql`);

console.log('\n📋 Integration Steps:\n');
console.log('1. Move API files to src/app/api/tasks/');
console.log('   cp src/generated/tasks/api/* src/app/api/tasks/');
console.log('');
console.log('2. Move components to src/components/');
console.log('   cp src/generated/tasks/components/* src/components/');
console.log('');
console.log('3. Move pages to src/app/');
console.log('   cp src/generated/tasks/pages/tasks-page.tsx src/app/tasks/page.tsx');
console.log('   cp src/generated/tasks/pages/create-task-page.tsx src/app/tasks/create/page.tsx');
console.log('');
console.log('4. Apply database migration:');
console.log('   POST http://localhost:3006/api/supabase/migrations/execute');
console.log('   Body: { "name": "create_tasks_table", "sql": "<migration content>" }');
console.log('');
console.log('5. Test your feature:');
console.log('   - Visit /tasks to see the task list');
console.log('   - Visit /tasks/create to create a new task');
console.log('   - Use /api/tasks for CRUD operations');

console.log('\n🎉 Task Management Feature Complete!');
