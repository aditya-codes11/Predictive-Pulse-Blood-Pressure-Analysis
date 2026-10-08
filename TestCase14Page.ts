import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase14Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC14 - Delivery Policy and Pincode Validation".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase14Page.execute');
      runReport.record('INFO', 'Started: TestCase14Page.execute');
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

      const DELIVERY = this.page
        .getByText(
          'Delivery Policy',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(DELIVERY).toBeVisible();

      Logger.info('Clicking on DELIVERY');
      await DELIVERY.click();
      Logger.info('Clicked on DELIVERY');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const MINIMUM = this.page
        .getByText(
          'Minimum Threshold',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await MINIMUM.count() > 0
      ) {
        Logger.info('Scrolling into view MINIMUM');
        await MINIMUM
          .scrollIntoViewIfNeeded();
        Logger.info('Scrolled into view MINIMUM');
      }

      const CHARGES = this.page
        .getByText(
          'Shipping and Delivery Charges',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await CHARGES.count() > 0
      ) {
        await expect(
          CHARGES
        ).toBeVisible();
      }

      await Screenshot.capture(
        this.page,
        'TC14_Delivery'
      );

      Logger.info('Reloading page');
      await this.page.reload();
      Logger.info('Reloaded page');

      await Screenshot.capture(
        this.page,
        'TC14_Delivery_Reload'
      );

      Logger.info('Navigating to');
      await this.page.goto(
        '/product/jaspo-cricket-ball-for-practice-training-matches-for-all-age-group-t20-soft-ball-1-pc-red-pvc-standard-size-red-6y-492336663'
      );
      Logger.info('Navigated to');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      await expect(
        this.page
      ).toHaveURL(/jaspo/i);

      const PINCODE = this.page
        .getByPlaceholder(
          'pincode',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await PINCODE.count() > 0
      ) {
        const CHECK = this.page
          .getByText(
            'Check',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        Logger.info('Entering text in PINCODE');
        await PINCODE.fill(
          '411001'
        );
        Logger.info('Entered text in PINCODE');

        if (await CHECK.count() > 0) {
          Logger.info('Clicking on CHECK');
          await CHECK.click();
          Logger.info('Clicked on CHECK');

          Logger.info('Entering text in PINCODE');
          await PINCODE.fill(
            '000000'
          );
          Logger.info('Entered text in PINCODE');

          Logger.info('Clicking on CHECK');
          await CHECK.click();
          Logger.info('Clicked on CHECK');

          Logger.info('Entering text in PINCODE');
          await PINCODE.fill('');
          Logger.info('Entered text in PINCODE');

          Logger.info('Clicking on CHECK');
          await CHECK.click();
          Logger.info('Clicked on CHECK');
        }
      }

      await Screenshot.capture(
        this.page,
        'TC14_Pincode'
      );
      Logger.info('Completed: TestCase14Page.execute');
      runReport.record('PASS', 'Completed: TestCase14Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase14Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase14Page.execute');
      await Screenshot.capture(this.page, 'TestCase14Page_execute_failed');
      throw error;
    }
  }
}