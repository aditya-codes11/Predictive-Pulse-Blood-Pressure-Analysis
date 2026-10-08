import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase03Page } from '../pages/TestCase03Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC03 - Toys Games School Travel and Gadgets Categories',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC03 - Toys Games School Travel and Gadgets Categories');
      runReport.record('INFO', 'Test started: TC03 - Toys Games School Travel and Gadgets Categories');

      const testCase = new TestCase03Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC03 - Toys Games School Travel and Gadgets Categories');
      runReport.record('PASS', 'Test completed: TC03 - Toys Games School Travel and Gadgets Categories');
    } catch (error) {
      Logger.error(`Test failed: TC03 - Toys Games School Travel and Gadgets Categories - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC03 - Toys Games School Travel and Gadgets Categories');
      await Screenshot.capture(page, 'TC03_failed');
      throw error;
    }
  }
);
