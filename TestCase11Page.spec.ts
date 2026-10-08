import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase11Page } from '../pages/TestCase11Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC11 - Privacy Cookies Policy and Twitter Link',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC11 - Privacy Cookies Policy and Twitter Link');
      runReport.record('INFO', 'Test started: TC11 - Privacy Cookies Policy and Twitter Link');

      const testCase = new TestCase11Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC11 - Privacy Cookies Policy and Twitter Link');
      runReport.record('PASS', 'Test completed: TC11 - Privacy Cookies Policy and Twitter Link');
    } catch (error) {
      Logger.error(`Test failed: TC11 - Privacy Cookies Policy and Twitter Link - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC11 - Privacy Cookies Policy and Twitter Link');
      await Screenshot.capture(page, 'TC11_failed');
      throw error;
    }
  }
);
