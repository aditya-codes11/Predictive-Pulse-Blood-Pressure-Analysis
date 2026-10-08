import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase07Page } from '../pages/TestCase07Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC07 - About Hamleys Links and Store Locator',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC07 - About Hamleys Links and Store Locator');
      runReport.record('INFO', 'Test started: TC07 - About Hamleys Links and Store Locator');

      const testCase = new TestCase07Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC07 - About Hamleys Links and Store Locator');
      runReport.record('PASS', 'Test completed: TC07 - About Hamleys Links and Store Locator');
    } catch (error) {
      Logger.error(`Test failed: TC07 - About Hamleys Links and Store Locator - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC07 - About Hamleys Links and Store Locator');
      await Screenshot.capture(page, 'TC07_failed');
      throw error;
    }
  }
);
