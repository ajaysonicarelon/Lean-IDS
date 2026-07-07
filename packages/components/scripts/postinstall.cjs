#!/usr/bin/env node

/**
 * Lean IDS - Post-install Script
 * 
 * Automatically copies AI assistant guidelines to the consuming project's root directory.
 * This ensures AI coding assistants (Cursor, Windsurf, GitHub Copilot, etc.) 
 * use Lean IDS components correctly.
 */

const fs = require('fs');
const path = require('path');

// Detect if we're in a consuming project or in the Lean IDS repo itself
const isLeanIDSRepo = __dirname.includes('lean-ids/packages/components');

// Skip postinstall if we're in the Lean IDS repo (during development)
if (isLeanIDSRepo) {
  console.log('📦 Lean IDS: Skipping postinstall (running in development mode)');
  process.exit(0);
}

// Find project root (go up from node_modules/@ajaysoni7832/lean-ids-components)
const projectRoot = path.resolve(__dirname, '../../../..');
const packageDir = path.resolve(__dirname, '..');

const filesToCopy = [
  {
    name: 'AI_READING_FLOW.md',
    description: 'AI reading flow instructions (START HERE)'
  },
  {
    name: '.cursorrules',
    description: 'Cursor IDE AI guidelines'
  },
  {
    name: '.windsurfrules',
    description: 'Windsurf IDE AI guidelines'
  },
  {
    name: 'AI_GUIDELINES.md',
    description: 'Universal AI assistant guidelines'
  },
  {
    name: 'AI_GUIDELINES_README.md',
    description: 'AI guidelines system overview'
  },
  {
    name: 'AI_SETUP_COMPLETE.md',
    description: 'AI setup documentation'
  }
];

console.log('\n🤖 Lean IDS: Setting up AI assistant guidelines...\n');

let copiedCount = 0;
let skippedCount = 0;

filesToCopy.forEach(({ name, description }) => {
  const source = path.join(packageDir, name);
  const dest = path.join(projectRoot, name);
  
  // Only copy if source exists
  if (!fs.existsSync(source)) {
    console.log(`⚠️  ${name} not found in package, skipping`);
    return;
  }

  // Don't overwrite existing files
  if (fs.existsSync(dest)) {
    console.log(`ℹ️  ${name} already exists, skipping`);
    skippedCount++;
    return;
  }

  try {
    fs.copyFileSync(source, dest);
    console.log(`✅ Created ${name} (${description})`);
    copiedCount++;
  } catch (err) {
    console.warn(`⚠️  Could not create ${name}:`, err.message);
  }
});

console.log('\n' + '='.repeat(60));

if (copiedCount > 0) {
  console.log(`\n✅ Lean IDS AI Setup Complete!`);
  console.log(`   ${copiedCount} file(s) copied to project root`);
  
  console.log('\n📖 Next Steps:');
  console.log('   1. Restart your IDE (Cursor/Windsurf) to load new rules');
  console.log('   2. Test by asking AI: "Create a button component"');
  console.log('   3. AI should import from @ajaysoni7832/lean-ids-components');
  
  console.log('\n📚 Documentation:');
  console.log('   - Read AI_READING_FLOW.md for complete setup guide');
  console.log('   - Read AI_GUIDELINES.md for detailed rules');
  
} else if (skippedCount > 0) {
  console.log(`\nℹ️  AI guidelines already set up (${skippedCount} files exist)`);
  console.log('   No changes made to existing files');
} else {
  console.log('\n⚠️  No AI guideline files were copied');
  console.log('   You may need to set up manually');
}

console.log('\n' + '='.repeat(60) + '\n');
