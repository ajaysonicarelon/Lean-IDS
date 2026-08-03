import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y, getViolations } from 'axe-playwright';

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  
  async postVisit(page, context) {
    const storyId = context.id;
    const storyName = context.title;

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });

    const violations = await getViolations(page, '#storybook-root');
    
    if (violations.length > 0) {
      console.error(`\n❌ Accessibility violations found in story: ${storyName} (${storyId})`);
      console.error(`Found ${violations.length} violation(s):\n`);
      
      violations.forEach((violation, index) => {
        console.error(`${index + 1}. ${violation.id}: ${violation.description}`);
        console.error(`   Impact: ${violation.impact}`);
        console.error(`   Help: ${violation.helpUrl}`);
        console.error(`   Affected elements: ${violation.nodes.length}`);
        violation.nodes.forEach((node) => {
          console.error(`     - ${node.html}`);
          console.error(`       ${node.failureSummary}`);
        });
        console.error('');
      });
    } else {
      console.log(`✅ No accessibility violations in: ${storyName}`);
    }
  },
  
  tags: {
    include: [],
    exclude: ['skip-test'],
    skip: ['skip-test'],
  },
};

export default config;
