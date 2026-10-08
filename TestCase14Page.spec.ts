import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase14Page } from '../pages/TestCase14Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC14 - Delivery Policy and Pincode Validation',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC14 - Delivery Policy and Pincode Validation');
      runReport.record('INFO', 'Test started: TC14 - Delivery Policy and Pincode Validation');

      const testCase = new TestCase14Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC14 - Delivery Policy and Pincode Validation');
      runReport.record('PASS', 'Test completed: TC14 - Delivery Policy and Pincode Validation');
    } catch (error) {
      Logger.error(`Test failed: TC14 - Delivery Policy and Pincode Validation - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC14 - Delivery Policy and Pincode Validation');
      await Screenshot.capture(page, 'TC14_failed');
      throw error;
    }
  }
);
