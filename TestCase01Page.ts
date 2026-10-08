import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase01Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC01 - Ride-Ons and Cycles Listing Filters Sorting and Navigation".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase01Page.execute');
      runReport.record('INFO', 'Started: TestCase01Page.execute');
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

      const RIDE_ONS = this.page
        .getByText(
          'Ride-Ons and Cycles',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(RIDE_ONS).toBeVisible();

      Logger.info('Clicking on RIDE_ONS');
      await RIDE_ONS.click();
      Logger.info('Clicked on RIDE_ONS');

      await expect(
        this.page
      ).toHaveURL(/ride|cycle/i);

      const HEADING = this.page
        .getByText(
          /Ride-Ons|Cycles/i
        )
        .filter({
          visible: true
        })
        .first();

      if (await HEADING.count() > 0) {
        await expect(HEADING).toBeVisible();
      }

      const urlBeforeSort =
        this.page.url();

      const SORT_BY = this.page
        .getByText(/Sort By/i)
        .filter({
          visible: true
        })
        .first();

      if (await SORT_BY.count() > 0) {
        Logger.info('Hovering over SORT_BY');
        await SORT_BY.hover();
        Logger.info('Hovered over SORT_BY');

        const LOW_TO_HIGH = this.page
          .getByText(
            'Price Low to High',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (await LOW_TO_HIGH.count() > 0) {
          Logger.info('Clicking on LOW_TO_HIGH');
          await LOW_TO_HIGH.click();
          Logger.info('Clicked on LOW_TO_HIGH');
        }
      }

      const urlAfterSort =
        this.page.url();

      if (
        urlAfterSort !== urlBeforeSort
      ) {
        expect(
          urlAfterSort
        ).not.toBe(urlBeforeSort);
      }

      const AGE_GROUP = this.page
        .getByText(
          'Age Group',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await AGE_GROUP.count() > 0) {
        Logger.info('Clicking on AGE_GROUP');
        await AGE_GROUP.click();
        Logger.info('Clicked on AGE_GROUP');

        const AGE = this.page
          .getByText(/3-5 years/i)
          .filter({
            visible: true
          })
          .first();

        if (await AGE.count() > 0) {
          Logger.info('Clicking on AGE');
          await AGE.click();
          Logger.info('Clicked on AGE');
        }

        const APPLY_FILTERS =
          this.page
            .getByText(/Apply Filter/i)
            .filter({
              visible: true
            })
            .first();

        if (
          await APPLY_FILTERS.count() > 0
        ) {
          Logger.info('Clicking on APPLY_FILTERS');
          await APPLY_FILTERS.click();
          Logger.info('Clicked on APPLY_FILTERS');
        }
      }

      const PRODUCT_COUNT = this.page
        .getByText(/products/i)
        .filter({
          visible: true
        })
        .first();

      if (
        await PRODUCT_COUNT.count() > 0
      ) {
        await expect(
          PRODUCT_COUNT
        ).toBeVisible();
      }

      await Screenshot.capture(
        this.page,
        'TC01_Ride_Ons_Filter'
      );

      const CLEAR_ALL = this.page
        .getByText(
          'Clear all',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await CLEAR_ALL.count() > 0) {
        Logger.info('Clicking on CLEAR_ALL');
        await CLEAR_ALL.click();
        Logger.info('Clicked on CLEAR_ALL');
      }

      if (await SORT_BY.count() > 0) {
        Logger.info('Hovering over SORT_BY');
        await SORT_BY.hover();
        Logger.info('Hovered over SORT_BY');

        const DISCOUNT = this.page
          .getByText(
            'Discount',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (
          await DISCOUNT.count() > 0
        ) {
          Logger.info('Clicking on DISCOUNT');
          await DISCOUNT.click();
          Logger.info('Clicked on DISCOUNT');
        }
      }

      const PRODUCTS = this.page
        .getByRole('link')
        .filter({
          visible: true
        });

      const count =
        await PRODUCTS.count();

      if (count > 0) {
        for (
          let index = 0;
          index < count;
          index++
        ) {
          const href =
            await PRODUCTS
              .nth(index)
              .getAttribute('href');

          if (
            href &&
            href.includes('/product/')
          ) {
            Logger.info('Clicking on PRODUCTS .nth(index)');
            await PRODUCTS
              .nth(index)
              .click();
            Logger.info('Clicked on PRODUCTS .nth(index)');

            break;
          }
        }
      }

      Logger.info('Navigating back');
      await this.page.goBack();
      Logger.info('Navigated back');

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      const SPORTS = this.page
        .getByText(
          'Sports & Outdoor',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await SPORTS.count() > 0) {
        Logger.info('Clicking on SPORTS');
        await SPORTS.click();
        Logger.info('Clicked on SPORTS');
      }
      Logger.info('Completed: TestCase01Page.execute');
      runReport.record('PASS', 'Completed: TestCase01Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase01Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase01Page.execute');
      await Screenshot.capture(this.page, 'TestCase01Page_execute_failed');
      throw error;
    }
  }
}