import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase10Page } from '../pages/TestCase10Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC10 - Newsletter Subscription Validation',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC10 - Newsletter Subscription Validation');
      runReport.record('INFO', 'Test started: TC10 - Newsletter Subscription Validation');

      const testCase = new TestCase10Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC10 - Newsletter Subscription Validation');
      runReport.record('PASS', 'Test completed: TC10 - Newsletter Subscription Validation');
    } catch (error) {
      Logger.error(`Test failed: TC10 - Newsletter Subscription Validation - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC10 - Newsletter Subscription Validation');
      await Screenshot.capture(page, 'TC10_failed');
      throw error;
    }
  }
);
