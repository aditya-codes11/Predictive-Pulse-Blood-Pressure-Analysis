import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase17Page } from '../pages/TestCase17Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC17 - SpiderMan Category Filter and Product Details',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC17 - SpiderMan Category Filter and Product Details');
      runReport.record('INFO', 'Test started: TC17 - SpiderMan Category Filter and Product Details');

      const testCase = new TestCase17Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC17 - SpiderMan Category Filter and Product Details');
      runReport.record('PASS', 'Test completed: TC17 - SpiderMan Category Filter and Product Details');
    } catch (error) {
      Logger.error(`Test failed: TC17 - SpiderMan Category Filter and Product Details - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC17 - SpiderMan Category Filter and Product Details');
      await Screenshot.capture(page, 'TC17_failed');
      throw error;
    }
  }
);
