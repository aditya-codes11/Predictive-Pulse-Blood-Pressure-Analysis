import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase16Page } from '../pages/TestCase16Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC16 - Fees Payment Policy and Instagram Navigation',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC16 - Fees Payment Policy and Instagram Navigation');
      runReport.record('INFO', 'Test started: TC16 - Fees Payment Policy and Instagram Navigation');

      const testCase = new TestCase16Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC16 - Fees Payment Policy and Instagram Navigation');
      runReport.record('PASS', 'Test completed: TC16 - Fees Payment Policy and Instagram Navigation');
    } catch (error) {
      Logger.error(`Test failed: TC16 - Fees Payment Policy and Instagram Navigation - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC16 - Fees Payment Policy and Instagram Navigation');
      await Screenshot.capture(page, 'TC16_failed');
      throw error;
    }
  }
);
