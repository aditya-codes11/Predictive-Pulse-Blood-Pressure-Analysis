import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase04Page } from '../pages/TestCase04Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC04 - Lego Filters Product Purchase and Policy Navigation',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC04 - Lego Filters Product Purchase and Policy Navigation');
      runReport.record('INFO', 'Test started: TC04 - Lego Filters Product Purchase and Policy Navigation');

      const testCase = new TestCase04Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC04 - Lego Filters Product Purchase and Policy Navigation');
      runReport.record('PASS', 'Test completed: TC04 - Lego Filters Product Purchase and Policy Navigation');
    } catch (error) {
      Logger.error(`Test failed: TC04 - Lego Filters Product Purchase and Policy Navigation - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC04 - Lego Filters Product Purchase and Policy Navigation');
      await Screenshot.capture(page, 'TC04_failed');
      throw error;
    }
  }
);
