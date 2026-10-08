import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase15Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC15 - Return Refund Policy and Refund Information".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase15Page.execute');
      runReport.record('INFO', 'Started: TestCase15Page.execute');
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      const RETURN_POLICY = this.page
        .getByText(
          'Return/Refunds Policy',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        RETURN_POLICY
      ).toBeVisible();

      Logger.info('Clicking on RETURN_POLICY');
      await RETURN_POLICY.click();
      Logger.info('Clicked on RETURN_POLICY');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const POLICY_HEADING = this.page
        .getByText(
          'Return',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        POLICY_HEADING
      ).toBeVisible();

      const RETURN_TERMS = this.page
        .getByText(
          'Terms of Return and Refund',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await RETURN_TERMS.count() > 0
      ) {
        Logger.info('Scrolling into view RETURN_TERMS');
        await RETURN_TERMS
          .scrollIntoViewIfNeeded();
        Logger.info('Scrolled into view RETURN_TERMS');

        await expect(
          RETURN_TERMS
        ).toBeVisible();
      }

      const REFUND_INFORMATION =
        this.page
          .getByText(
            'refund',
            {
              exact: false
            }
          )
          .filter({
            visible: true
          })
          .first();

      if (
        await REFUND_INFORMATION.count() > 0
      ) {
        await expect(
          REFUND_INFORMATION
        ).toBeVisible();
      }

      await Screenshot.capture(
        this.page,
        'TC15_Return_Refund'
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      const FEES_POLICY = this.page
        .getByText(
          'Fees & Payment Policy',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        FEES_POLICY
      ).toBeVisible();

      Logger.info('Clicking on FEES_POLICY');
      await FEES_POLICY.click();
      Logger.info('Clicked on FEES_POLICY');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const CASH_REFUND = this.page
        .getByText(
          'Cash on Delivery',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await CASH_REFUND.count() > 0
      ) {
        await expect(
          CASH_REFUND
        ).toBeVisible();
      }

      Logger.info('Navigating back');
      await this.page.goBack();
      Logger.info('Navigated back');

      Logger.info('Navigating back');
      await this.page.goBack();
      Logger.info('Navigated back');

      Logger.info('Setting viewport size { width: 375, height: 800 }');
      await this.page.setViewportSize({
        width: 375,
        height: 800
      });
      Logger.info('Viewport size set { width: 375, height: 800 }');

      await Screenshot.capture(
        this.page,
        'TC15_Mobile_Viewport'
      );
      Logger.info('Completed: TestCase15Page.execute');
      runReport.record('PASS', 'Completed: TestCase15Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase15Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase15Page.execute');
      await Screenshot.capture(this.page, 'TestCase15Page_execute_failed');
      throw error;
    }
  }
}