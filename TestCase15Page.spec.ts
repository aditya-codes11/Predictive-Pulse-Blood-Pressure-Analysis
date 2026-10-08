import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase15Page } from '../pages/TestCase15Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC15 - Return Refund Policy and Refund Information',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC15 - Return Refund Policy and Refund Information');
      runReport.record('INFO', 'Test started: TC15 - Return Refund Policy and Refund Information');

      const testCase = new TestCase15Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC15 - Return Refund Policy and Refund Information');
      runReport.record('PASS', 'Test completed: TC15 - Return Refund Policy and Refund Information');
    } catch (error) {
      Logger.error(`Test failed: TC15 - Return Refund Policy and Refund Information - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC15 - Return Refund Policy and Refund Information');
      await Screenshot.capture(page, 'TC15_failed');
      throw error;
    }
  }
);
