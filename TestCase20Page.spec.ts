import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase20Page } from '../pages/TestCase20Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC20 - Majorette Search Homepage and Newsletter',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC20 - Majorette Search Homepage and Newsletter');
      runReport.record('INFO', 'Test started: TC20 - Majorette Search Homepage and Newsletter');

      const testCase = new TestCase20Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC20 - Majorette Search Homepage and Newsletter');
      runReport.record('PASS', 'Test completed: TC20 - Majorette Search Homepage and Newsletter');
    } catch (error) {
      Logger.error(`Test failed: TC20 - Majorette Search Homepage and Newsletter - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC20 - Majorette Search Homepage and Newsletter');
      await Screenshot.capture(page, 'TC20_failed');
      throw error;
    }
  }
);
