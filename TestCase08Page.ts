import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase08Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: footer
   * Description: Scrolls the page to the bottom so that the footer section is in view.
   * Parameters: None
   * Return Type: Promise<void>
   */
  private async footer() {
    try {
      Logger.info('Started: TestCase08Page.footer');
      runReport.record('INFO', 'Started: TestCase08Page.footer');
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');
      Logger.info('Completed: TestCase08Page.footer');
      runReport.record('PASS', 'Completed: TestCase08Page.footer');
    } catch (error) {
      Logger.error(`Failed: TestCase08Page.footer - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase08Page.footer');
      await Screenshot.capture(this.page, 'TestCase08Page_footer_failed');
      throw error;
    }
  }

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC08 - Track Order and My Account Login Redirect".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase08Page.execute');
      runReport.record('INFO', 'Started: TestCase08Page.execute');
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      const TRACK_ORDER = this.page
        .getByText(
          'Track Order',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      Logger.info('Clicking on TRACK_ORDER');
      await TRACK_ORDER.click();
      Logger.info('Clicked on TRACK_ORDER');

      const trackUrl =
        this.page.url();

      await expect(
        this.page
      ).toHaveURL(/auth|login|track/i);

      await Screenshot.capture(
        this.page,
        'TC08_Track_Order'
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      const WISHLIST = this.page
        .getByText(
          'Wishlist',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await WISHLIST.count() > 0
      ) {
        Logger.info('Clicking on WISHLIST');
        await WISHLIST.click();
        Logger.info('Clicked on WISHLIST');

        const MOBILE = this.page
          .getByRole('textbox')
          .filter({
            visible: true
          })
          .first();

        if (await MOBILE.count() > 0) {
          Logger.info('Entering text in MOBILE');
          await MOBILE.fill(
            '9999999999'
          );
          Logger.info('Entered text in MOBILE');
        }
      }

      await Screenshot.capture(
        this.page,
        'TC08_Wishlist'
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      const MY_ACCOUNT = this.page
        .getByText(
          'My Account',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      Logger.info('Clicking on MY_ACCOUNT');
      await MY_ACCOUNT.click();
      Logger.info('Clicked on MY_ACCOUNT');

      const accountUrl =
        this.page.url();

      expect(
        accountUrl.length
      ).toBeGreaterThan(0);

      console.log(
        `Track URL: ${trackUrl}`
      );

      console.log(
        `Account URL: ${accountUrl}`
      );

      await Screenshot.capture(
        this.page,
        'TC08_My_Account'
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await expect(
        this.page
      ).toHaveURL(
        /hamleys\.in\/?$/
      );
      Logger.info('Completed: TestCase08Page.execute');
      runReport.record('PASS', 'Completed: TestCase08Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase08Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase08Page.execute');
      await Screenshot.capture(this.page, 'TestCase08Page_execute_failed');
      throw error;
    }
  }
}