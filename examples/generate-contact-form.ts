/**
 * Example: Generate a Contact Form Component
 *
 * This example shows how to generate a complete contact form
 * with validation and professional styling.
 */

import { generate } from '@/lib/generators/cli';
import fs from 'fs';
import path from 'path';

// Generate contact form component
const contactForm = generate.component({
  name: 'ContactForm',
  type: 'form',
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      required: true
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      required: false
    },
    {
      name: 'subject',
      type: 'select',
      label: 'Subject',
      required: true,
      options: ['General Inquiry', 'Support', 'Sales', 'Partnership']
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Your Message',
      required: true
    }
  ]
});

console.log('📝 Contact Form Generated!');
console.log('\n=== Generated Code ===\n');
console.log(contactForm);
console.log('\n=== Usage ===');
console.log('Copy this code to: src/components/contact-form.tsx');
console.log('\nThen import and use:');
console.log('import { ContactForm } from "@/components/contact-form";');
console.log('\n<ContactForm />');

// Optionally save to file
const outputPath = path.join(process.cwd(), 'src/components/generated');
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

fs.writeFileSync(
  path.join(outputPath, 'contact-form.tsx'),
  contactForm
);

console.log(`\n✅ Saved to: ${outputPath}/contact-form.tsx`);
