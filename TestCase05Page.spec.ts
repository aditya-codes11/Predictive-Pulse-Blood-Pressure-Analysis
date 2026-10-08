import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase05Page } from '../pages/TestCase05Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC05 - Nerf Sorting Brand Filter and Footer Navigation',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC05 - Nerf Sorting Brand Filter and Footer Navigation');
      runReport.record('INFO', 'Test started: TC05 - Nerf Sorting Brand Filter and Footer Navigation');

      const testCase = new TestCase05Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC05 - Nerf Sorting Brand Filter and Footer Navigation');
      runReport.record('PASS', 'Test completed: TC05 - Nerf Sorting Brand Filter and Footer Navigation');
    } catch (error) {
      Logger.error(`Test failed: TC05 - Nerf Sorting Brand Filter and Footer Navigation - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC05 - Nerf Sorting Brand Filter and Footer Navigation');
      await Screenshot.capture(page, 'TC05_failed');
      throw error;
    }
  }
);
