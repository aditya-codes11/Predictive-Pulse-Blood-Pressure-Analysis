import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase12Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC12 - Terms and Conditions and Sale Terms Navigation".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase12Page.execute');
      runReport.record('INFO', 'Started: TestCase12Page.execute');
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      const TERMS_AND_CONDITIONS = this.page
        .getByText(
          'Terms And Conditions',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        TERMS_AND_CONDITIONS
      ).toBeVisible();

      Logger.info('Clicking on TERMS_AND_CONDITIONS');
      await TERMS_AND_CONDITIONS.click();
      Logger.info('Clicked on TERMS_AND_CONDITIONS');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const TERMS_HEADING = this.page
        .getByText(
          'Terms And Conditions',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await TERMS_HEADING.count() > 0
      ) {
        await expect(
          TERMS_HEADING
        ).toBeVisible();
      }

      const GRIEVANCE_OFFICER = this.page
        .getByText(
          'Grievance Officer',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await GRIEVANCE_OFFICER.count() > 0
      ) {
        Logger.info('Scrolling into view GRIEVANCE_OFFICER');
        await GRIEVANCE_OFFICER
          .scrollIntoViewIfNeeded();
        Logger.info('Scrolled into view GRIEVANCE_OFFICER');

        await expect(
          GRIEVANCE_OFFICER
        ).toBeVisible();
      }

      await Screenshot.capture(
        this.page,
        'TC12_Terms_And_Conditions'
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      const SALE_TERMS = this.page
        .getByText(
          'Sale Terms & Conditions',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        SALE_TERMS
      ).toBeVisible();

      Logger.info('Clicking on SALE_TERMS');
      await SALE_TERMS.click();
      Logger.info('Clicked on SALE_TERMS');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const SALE_TERMS_HEADING = this.page
        .getByText(
          'Sale Terms',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await SALE_TERMS_HEADING.count() > 0
      ) {
        await expect(
          SALE_TERMS_HEADING
        ).toBeVisible();
      }

      const SEARCH_BOX = this.page
        .getByRole('textbox')
        .filter({
          visible: true
        })
        .first();

      if (
        await SEARCH_BOX.count() > 0
      ) {
        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill(
          'Sale Terms'
        );
        Logger.info('Entered text in SEARCH_BOX');

        Logger.info("Pressing key on SEARCH_BOX 'Enter'");
        await SEARCH_BOX.press(
          'Enter'
        );
        Logger.info("Pressed key on SEARCH_BOX 'Enter'");
      }

      await Screenshot.capture(
        this.page,
        'TC12_Sale_Terms'
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          0
        );
      });
      Logger.info('Executed script on page');

      await Screenshot.capture(
        this.page,
        'TC12_Page_Top'
      );

      await expect(
        this.page
      ).toHaveURL(
        'https://hamleys.in/'
      );
      Logger.info('Completed: TestCase12Page.execute');
      runReport.record('PASS', 'Completed: TestCase12Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase12Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase12Page.execute');
      await Screenshot.capture(this.page, 'TestCase12Page_execute_failed');
      throw error;
    }
  }
}