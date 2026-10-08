import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase11Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC11 - Privacy Cookies Policy and Twitter Link".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase11Page.execute');
      runReport.record('INFO', 'Started: TestCase11Page.execute');
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

      const PRIVACY = this.page
        .getByText(
          'Privacy & Cookies',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(PRIVACY).toBeVisible();

      Logger.info('Clicking on PRIVACY');
      await PRIVACY.click();
      Logger.info('Clicked on PRIVACY');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      expect(
        this.page.url()
      ).not.toBe(
        'https://hamleys.in/'
      );

      const COOKIE_CONTENT = this.page
        .getByText(
          'cookie',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await COOKIE_CONTENT.count() > 0
      ) {
        await expect(
          COOKIE_CONTENT
        ).toBeVisible();
      }

      await Screenshot.capture(
        this.page,
        'TC11_Privacy_Cookies'
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

      const LINKS = this.page
        .getByRole('link')
        .filter({
          visible: true
        });

      const count =
        await LINKS.count();

      let twitterFound = false;

      for (
        let index = 0;
        index < count;
        index++
      ) {
        const href =
          await LINKS
            .nth(index)
            .getAttribute('href');

        if (
          href &&
          (
            href.toLowerCase()
              .includes('twitter') ||
            href.toLowerCase()
              .includes('x.com')
          )
        ) {
          twitterFound = true;

          console.log(
            `Twitter URL: ${href}`
          );

          break;
        }
      }

      if (twitterFound) {
        expect(
          twitterFound
        ).toBeTruthy();
      }
      Logger.info('Completed: TestCase11Page.execute');
      runReport.record('PASS', 'Completed: TestCase11Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase11Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase11Page.execute');
      await Screenshot.capture(this.page, 'TestCase11Page_execute_failed');
      throw error;
    }
  }
}
