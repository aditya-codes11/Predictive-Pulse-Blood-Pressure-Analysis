import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase01Page } from '../pages/TestCase01Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation');
      runReport.record('INFO', 'Test started: TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation');

      const testCase = new TestCase01Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation');
      runReport.record('PASS', 'Test completed: TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation');
    } catch (error) {
      Logger.error(`Test failed: TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation');
      await Screenshot.capture(page, 'TC01_failed');
      throw error;
    }
  }
);
