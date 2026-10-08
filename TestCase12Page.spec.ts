import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase12Page } from '../pages/TestCase12Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC12 - Terms and Conditions and Sale Terms Navigation',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC12 - Terms and Conditions and Sale Terms Navigation');
      runReport.record('INFO', 'Test started: TC12 - Terms and Conditions and Sale Terms Navigation');

      const testCase = new TestCase12Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC12 - Terms and Conditions and Sale Terms Navigation');
      runReport.record('PASS', 'Test completed: TC12 - Terms and Conditions and Sale Terms Navigation');
    } catch (error) {
      Logger.error(`Test failed: TC12 - Terms and Conditions and Sale Terms Navigation - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC12 - Terms and Conditions and Sale Terms Navigation');
      await Screenshot.capture(page, 'TC12_failed');
      throw error;
    }
  }
);
