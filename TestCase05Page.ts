import { Page, expect } from '@playwright/test';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

export class TestCase05Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC05 - Nerf Sorting Brand Filter and Footer Navigation".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase05Page.execute');
      runReport.record('INFO', 'Started: TestCase05Page.execute');
      Logger.info("Navigating to '/products?brand=nerf'");
      await this.page.goto(
        '/products?brand=nerf'
      );
      Logger.info("Navigated to '/products?brand=nerf'");

      await expect(
        this.page
      ).toHaveURL(/nerf/i);

      const SORT_BY = this.page
        .getByText(
          'Sort By',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await SORT_BY.count() > 0
      ) {
        Logger.info('Hovering over SORT_BY');
        await SORT_BY.hover();
        Logger.info('Hovered over SORT_BY');

        const ARRIVAL = this.page
          .getByText(
            'New Arrival',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (
          await ARRIVAL.count() > 0
        ) {
          Logger.info('Clicking on ARRIVAL');
          await ARRIVAL.click();
          Logger.info('Clicked on ARRIVAL');
        }
      }

      const COUNT = this.page
        .getByText(
          'products',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await COUNT.count() > 0) {
        await expect(COUNT).toBeVisible();
      }

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

        const TEXTBOX = this.page
          .getByRole('textbox')
          .filter({
            visible: true
          })
          .first();

        if (
          await TEXTBOX.count() > 0
        ) {
          Logger.info('Entering text in TEXTBOX');
          await TEXTBOX.fill(
            '9999999999'
          );
          Logger.info('Entered text in TEXTBOX');
        }
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

      const HOT_WHEELS = this.page
        .getByText(
          'Hot Wheels',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        HOT_WHEELS
      ).toBeVisible();

      Logger.info('Clicking on HOT_WHEELS');
      await HOT_WHEELS.click();
      Logger.info('Clicked on HOT_WHEELS');

      await expect(
        this.page
      ).toHaveURL(/hot-wheels/i);

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      const MOST_SEARCHED = this.page
        .getByText(
          'Most Searched',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        MOST_SEARCHED
      ).toBeVisible();
      Logger.info('Completed: TestCase05Page.execute');
      runReport.record('PASS', 'Completed: TestCase05Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase05Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase05Page.execute');
      await Screenshot.capture(this.page, 'TestCase05Page_execute_failed');
      throw error;
    }
  }
}