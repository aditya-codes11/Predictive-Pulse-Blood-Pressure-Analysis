import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase06Page } from '../pages/TestCase06Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC06 - Most Searched Navigation and Social Media Links',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC06 - Most Searched Navigation and Social Media Links');
      runReport.record('INFO', 'Test started: TC06 - Most Searched Navigation and Social Media Links');

      const testCase = new TestCase06Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC06 - Most Searched Navigation and Social Media Links');
      runReport.record('PASS', 'Test completed: TC06 - Most Searched Navigation and Social Media Links');
    } catch (error) {
      Logger.error(`Test failed: TC06 - Most Searched Navigation and Social Media Links - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC06 - Most Searched Navigation and Social Media Links');
      await Screenshot.capture(page, 'TC06_failed');
      throw error;
    }
  }
);
