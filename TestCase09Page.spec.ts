import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase09Page } from '../pages/TestCase09Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC09 - Customer Care Cancellation and Books Filter',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC09 - Customer Care Cancellation and Books Filter');
      runReport.record('INFO', 'Test started: TC09 - Customer Care Cancellation and Books Filter');

      const testCase = new TestCase09Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC09 - Customer Care Cancellation and Books Filter');
      runReport.record('PASS', 'Test completed: TC09 - Customer Care Cancellation and Books Filter');
    } catch (error) {
      Logger.error(`Test failed: TC09 - Customer Care Cancellation and Books Filter - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC09 - Customer Care Cancellation and Books Filter');
      await Screenshot.capture(page, 'TC09_failed');
      throw error;
    }
  }
);
