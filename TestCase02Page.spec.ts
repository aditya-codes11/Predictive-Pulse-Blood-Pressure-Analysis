import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase02Page } from '../pages/TestCase02Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC02 - Baby Gear Listing Cart Operations and Footer Links',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC02 - Baby Gear Listing Cart Operations and Footer Links');
      runReport.record('INFO', 'Test started: TC02 - Baby Gear Listing Cart Operations and Footer Links');

      const testCase = new TestCase02Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC02 - Baby Gear Listing Cart Operations and Footer Links');
      runReport.record('PASS', 'Test completed: TC02 - Baby Gear Listing Cart Operations and Footer Links');
    } catch (error) {
      Logger.error(`Test failed: TC02 - Baby Gear Listing Cart Operations and Footer Links - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC02 - Baby Gear Listing Cart Operations and Footer Links');
      await Screenshot.capture(page, 'TC02_failed');
      throw error;
    }
  }
);
