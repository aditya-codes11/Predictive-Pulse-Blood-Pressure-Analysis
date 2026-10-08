import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase18Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC18 - Store Locations Search and Filtering".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase18Page.execute');
      runReport.record('INFO', 'Started: TestCase18Page.execute');
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

      const STORE_LOCATIONS = this.page
        .getByText(
          'Store Locator',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        STORE_LOCATIONS
      ).toBeVisible();

      Logger.info('Clicking on STORE_LOCATIONS');
      await STORE_LOCATIONS.click();
      Logger.info('Clicked on STORE_LOCATIONS');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const TEXTBOXES = this.page
        .getByRole('textbox')
        .filter({
          visible: true
        });

      const textboxCount =
        await TEXTBOXES.count();

      if (textboxCount > 0) {
        const SEARCH_BOX =
          TEXTBOXES.first();

        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill(
          'Pune'
        );
        Logger.info('Entered text in SEARCH_BOX');

        Logger.info("Pressing key on SEARCH_BOX 'Enter'");
        await SEARCH_BOX.press(
          'Enter'
        );
        Logger.info("Pressed key on SEARCH_BOX 'Enter'");

        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill('');
        Logger.info('Entered text in SEARCH_BOX');

        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill(
          'zzzzz'
        );
        Logger.info('Entered text in SEARCH_BOX');

        Logger.info("Pressing key on SEARCH_BOX 'Enter'");
        await SEARCH_BOX.press(
          'Enter'
        );
        Logger.info("Pressed key on SEARCH_BOX 'Enter'");

        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill('');
        Logger.info('Entered text in SEARCH_BOX');
      }

      const ASSAM = this.page
        .getByText(
          'Assam',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await ASSAM.count() > 0
      ) {
        Logger.info('Clicking on ASSAM');
        await ASSAM.click();
        Logger.info('Clicked on ASSAM');
      }

      const SEARCH_BUTTON = this.page
        .getByText(
          'Search',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await SEARCH_BUTTON.count() > 0
      ) {
        Logger.info('Clicking on SEARCH_BUTTON');
        await SEARCH_BUTTON.click();
        Logger.info('Clicked on SEARCH_BUTTON');
      }

      await Screenshot.capture(
        this.page,
        'TC18_Store_Locations'
      );
      Logger.info('Completed: TestCase18Page.execute');
      runReport.record('PASS', 'Completed: TestCase18Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase18Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase18Page.execute');
      await Screenshot.capture(this.page, 'TestCase18Page_execute_failed');
      throw error;
    }
  }
}