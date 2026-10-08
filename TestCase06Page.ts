import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase06Page {
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
      Logger.info('Started: TestCase06Page.footer');
      runReport.record('INFO', 'Started: TestCase06Page.footer');
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');
      Logger.info('Completed: TestCase06Page.footer');
      runReport.record('PASS', 'Completed: TestCase06Page.footer');
    } catch (error) {
      Logger.error(`Failed: TestCase06Page.footer - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase06Page.footer');
      await Screenshot.capture(this.page, 'TestCase06Page_footer_failed');
      throw error;
    }
  }

  /**
   * Author: Aditya Nimbolkar
   * Method Name: openFooterItem
   * Description: Scrolls to the footer, verifies the given footer item is visible and clicks it.
   * Parameters: item (string) - visible text of the footer item
   * Return Type: Promise<void>
   */
  private async openFooterItem(
    item: string
  ) {
    try {
      Logger.info('Started: TestCase06Page.openFooterItem');
      runReport.record('INFO', 'Started: TestCase06Page.openFooterItem');
      await this.footer();

      const LINK = this.page
        .getByText(
          item,
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(LINK).toBeVisible();

      Logger.info('Clicking on LINK');
      await LINK.click();
      Logger.info('Clicked on LINK');
      Logger.info('Completed: TestCase06Page.openFooterItem');
      runReport.record('PASS', 'Completed: TestCase06Page.openFooterItem');
    } catch (error) {
      Logger.error(`Failed: TestCase06Page.openFooterItem - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase06Page.openFooterItem');
      await Screenshot.capture(this.page, 'TestCase06Page_openFooterItem_failed');
      throw error;
    }
  }

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC06 - Most Searched Navigation and Social Media Links".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase06Page.execute');
      runReport.record('INFO', 'Started: TestCase06Page.execute');
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.openFooterItem(
        'Hot Wheels'
      );

      console.log(
        `Hot Wheels: ${this.page.url()}`
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.openFooterItem(
        'SpiderMan'
      );

      console.log(
        `SpiderMan: ${this.page.url()}`
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.openFooterItem(
        'Paw Patrol'
      );

      console.log(
        `Paw Patrol: ${this.page.url()}`
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.openFooterItem(
        'Majorette'
      );

      console.log(
        `Majorette: ${this.page.url()}`
      );

      await this.footer();

      const YOUTUBE = this.page
        .getByText(/YouTube/i)
        .filter({
          visible: true
        })
        .first();

      if (await YOUTUBE.count() > 0) {
        const newPagePromise =
          this.page.context()
            .waitForEvent('page');

        Logger.info('Clicking on YOUTUBE');
        await YOUTUBE.click();
        Logger.info('Clicked on YOUTUBE');

        const youtubePage =
          await newPagePromise;

        Logger.info("Waiting for load state 'domcontentloaded'");
        await youtubePage.waitForLoadState(
          'domcontentloaded'
        );
        Logger.info("Load state reached 'domcontentloaded'");

        await Screenshot.capture(
          youtubePage,
          'TC06_YouTube'
        );

        Logger.info('Closing youtubePage');
        await youtubePage.close();
        Logger.info('Closed youtubePage');
      }

      Logger.info('Bringing page to front');
      await this.page.bringToFront();
      Logger.info('Page brought to front');

      await this.footer();

      const INSTAGRAM = this.page
        .getByText(/Instagram/i)
        .filter({
          visible: true
        })
        .first();

      if (
        await INSTAGRAM.count() > 0
      ) {
        await expect(
          INSTAGRAM
        ).toBeVisible();
      }

      await Screenshot.capture(
        this.page,
        'TC06_Footer'
      );
      Logger.info('Completed: TestCase06Page.execute');
      runReport.record('PASS', 'Completed: TestCase06Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase06Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase06Page.execute');
      await Screenshot.capture(this.page, 'TestCase06Page_execute_failed');
      throw error;
    }
  }
}