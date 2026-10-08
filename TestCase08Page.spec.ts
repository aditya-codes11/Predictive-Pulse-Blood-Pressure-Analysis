import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase08Page } from '../pages/TestCase08Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC08 - Track Order and My Account Login Redirect',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC08 - Track Order and My Account Login Redirect');
      runReport.record('INFO', 'Test started: TC08 - Track Order and My Account Login Redirect');

      const testCase = new TestCase08Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC08 - Track Order and My Account Login Redirect');
      runReport.record('PASS', 'Test completed: TC08 - Track Order and My Account Login Redirect');
    } catch (error) {
      Logger.error(`Test failed: TC08 - Track Order and My Account Login Redirect - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC08 - Track Order and My Account Login Redirect');
      await Screenshot.capture(page, 'TC08_failed');
      throw error;
    }
  }
);
