import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase18Page } from '../pages/TestCase18Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC18 - Store Locations Search and Filtering',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC18 - Store Locations Search and Filtering');
      runReport.record('INFO', 'Test started: TC18 - Store Locations Search and Filtering');

      const testCase = new TestCase18Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC18 - Store Locations Search and Filtering');
      runReport.record('PASS', 'Test completed: TC18 - Store Locations Search and Filtering');
    } catch (error) {
      Logger.error(`Test failed: TC18 - Store Locations Search and Filtering - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC18 - Store Locations Search and Filtering');
      await Screenshot.capture(page, 'TC18_failed');
      throw error;
    }
  }
);
