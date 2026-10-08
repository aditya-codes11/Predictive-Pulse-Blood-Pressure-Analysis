import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase09Page {
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
      Logger.info('Started: TestCase09Page.footer');
      runReport.record('INFO', 'Started: TestCase09Page.footer');
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');
      Logger.info('Completed: TestCase09Page.footer');
      runReport.record('PASS', 'Completed: TestCase09Page.footer');
    } catch (error) {
      Logger.error(`Failed: TestCase09Page.footer - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase09Page.footer');
      await Screenshot.capture(this.page, 'TestCase09Page_footer_failed');
      throw error;
    }
  }

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC09 - Customer Care Cancellation and Books Filter".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase09Page.execute');
      runReport.record('INFO', 'Started: TestCase09Page.execute');
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      const CUSTOMER_CARE = this.page
        .getByText(
          'Customer Care',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      Logger.info('Clicking on CUSTOMER_CARE');
      await CUSTOMER_CARE.click();
      Logger.info('Clicked on CUSTOMER_CARE');

      const QUERY = this.page
        .getByText(/Select Query/i)
        .filter({
          visible: true
        })
        .first();

      if (await QUERY.count() > 0) {
        Logger.info('Clicking on QUERY');
        await QUERY.click();
        Logger.info('Clicked on QUERY');

        const CANCELLATION = this.page
          .getByText(
            /Online Order.*Cancellations/i
          )
          .filter({
            visible: true
          })
          .first();

        if (
          await CANCELLATION.count() > 0
        ) {
          Logger.info('Clicking on CANCELLATION');
          await CANCELLATION.click();
          Logger.info('Clicked on CANCELLATION');
        }
      }

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      const CANCEL_ORDER = this.page
        .getByText(
          'Cancel/Return Order',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await CANCEL_ORDER.count() > 0
      ) {
        Logger.info('Clicking on CANCEL_ORDER');
        await CANCEL_ORDER.click();
        Logger.info('Clicked on CANCEL_ORDER');
      }

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      await Screenshot.capture(
        this.page,
        'TC09_Newsletter'
      );

      const BOOKS = this.page
        .getByText(
          'Books',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      Logger.info('Clicking on BOOKS');
      await BOOKS.click();
      Logger.info('Clicked on BOOKS');

      const GENDER = this.page
        .getByText(
          'Gender',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await GENDER.count() > 0) {
        Logger.info('Clicking on GENDER');
        await GENDER.click();
        Logger.info('Clicked on GENDER');

        const GIRLS = this.page
          .getByText(
            'Girls',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (await GIRLS.count() > 0) {
          Logger.info('Clicking on GIRLS');
          await GIRLS.click();
          Logger.info('Clicked on GIRLS');
        }

        const APPLY = this.page
          .getByText(/Apply Filter/i)
          .filter({
            visible: true
          })
          .first();

        if (await APPLY.count() > 0) {
          Logger.info('Clicking on APPLY');
          await APPLY.click();
          Logger.info('Clicked on APPLY');
        }
      }

      await Screenshot.capture(
        this.page,
        'TC09_Books_Girls'
      );
      Logger.info('Completed: TestCase09Page.execute');
      runReport.record('PASS', 'Completed: TestCase09Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase09Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase09Page.execute');
      await Screenshot.capture(this.page, 'TestCase09Page_execute_failed');
      throw error;
    }
  }
}