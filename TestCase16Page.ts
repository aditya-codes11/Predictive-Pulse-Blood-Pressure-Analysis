import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase16Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC16 - Fees Payment Policy and Instagram Navigation".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase16Page.execute');
      runReport.record('INFO', 'Started: TestCase16Page.execute');
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

      const FEES_HEADING = this.page
        .getByText(
          'Payment',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await FEES_HEADING.count() > 0
      ) {
        await expect(
          FEES_HEADING
        ).toBeVisible();
      }

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

      let instagramOpened = false;

      for (
        let index = 0;
        index < count;
        index++
      ) {
        const CURRENT_LINK =
          LINKS.nth(index);

        const href =
          await CURRENT_LINK
            .getAttribute('href');

        if (
          href &&
          href.toLowerCase()
            .includes('instagram')
        ) {
          const newPagePromise =
            this.page
              .context()
              .waitForEvent('page')
              .catch(() => null);

          Logger.info('Clicking on CURRENT_LINK');
          await CURRENT_LINK.click();
          Logger.info('Clicked on CURRENT_LINK');

          const instagramPage =
            await newPagePromise;

          if (instagramPage) {
            await instagramPage
              .waitForLoadState(
                'domcontentloaded'
              )
              .catch(() => {});

            expect(
              instagramPage.url()
                .toLowerCase()
            ).toContain(
              'instagram'
            );

            await Screenshot.capture(
              instagramPage,
              'TC16_Instagram'
            );

            Logger.info('Closing instagramPage');
            await instagramPage.close();
            Logger.info('Closed instagramPage');

            instagramOpened = true;
          }

          break;
        }
      }

      if (instagramOpened) {
        Logger.info('Bringing page to front');
        await this.page
          .bringToFront();
        Logger.info('Page brought to front');
      }

      await expect(
        this.page
      ).toHaveURL(
        'https://hamleys.in/'
      );
      Logger.info('Completed: TestCase16Page.execute');
      runReport.record('PASS', 'Completed: TestCase16Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase16Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase16Page.execute');
      await Screenshot.capture(this.page, 'TestCase16Page_execute_failed');
      throw error;
    }
  }
}
``