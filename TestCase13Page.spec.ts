import '../utils/hooks';
import { test } from '@playwright/test';
import { TestCase13Page } from '../pages/TestCase13Page';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

test(
  'TC13 - Sale Terms Coupon Codes Offers and Facebook',
  async ({ page }) => {
    try {
      Logger.info('Test started: TC13 - Sale Terms Coupon Codes Offers and Facebook');
      runReport.record('INFO', 'Test started: TC13 - Sale Terms Coupon Codes Offers and Facebook');

      const testCase = new TestCase13Page(page);

      await testCase.execute();

      Logger.info('Test completed: TC13 - Sale Terms Coupon Codes Offers and Facebook');
      runReport.record('PASS', 'Test completed: TC13 - Sale Terms Coupon Codes Offers and Facebook');
    } catch (error) {
      Logger.error(`Test failed: TC13 - Sale Terms Coupon Codes Offers and Facebook - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Test failed: TC13 - Sale Terms Coupon Codes Offers and Facebook');
      await Screenshot.capture(page, 'TC13_failed');
      throw error;
    }
  }
);
