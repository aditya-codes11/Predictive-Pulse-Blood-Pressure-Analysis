import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase19Page } from '../pages/TestCase19Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC19 - Footer Social Media Links and Responsive Layout',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC19 - Footer Social Media Links and Responsive Layout');
      runReport.record('INFO', 'Test started: TC19 - Footer Social Media Links and Responsive Layout');

      const testCase = new TestCase19Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC19 - Footer Social Media Links and Responsive Layout');
      runReport.record('PASS', 'Test completed: TC19 - Footer Social Media Links and Responsive Layout');
    } catch (error) {
      Logger.error(`Test failed: TC19 - Footer Social Media Links and Responsive Layout - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC19 - Footer Social Media Links and Responsive Layout');
      await Screenshot.capture(page, 'TC19_failed');
      throw error;
    }
  }
);
