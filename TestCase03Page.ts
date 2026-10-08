import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase03Page {
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
      Logger.info('Started: TestCase03Page.footer');
      runReport.record('INFO', 'Started: TestCase03Page.footer');
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');
      Logger.info('Completed: TestCase03Page.footer');
      runReport.record('PASS', 'Completed: TestCase03Page.footer');
    } catch (error) {
      Logger.error(`Failed: TestCase03Page.footer - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase03Page.footer');
      await Screenshot.capture(this.page, 'TestCase03Page_footer_failed');
      throw error;
    }
  }

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC03 - Toys Games School Travel and Gadgets Categories".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase03Page.execute');
      runReport.record('INFO', 'Started: TestCase03Page.execute');
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      const TOYS_GAMES = this.page
        .getByText(
          'Toys and Games',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        TOYS_GAMES
      ).toBeVisible();

      Logger.info('Clicking on TOYS_GAMES');
      await TOYS_GAMES.click();
      Logger.info('Clicked on TOYS_GAMES');

      await expect(
        this.page
          .getByText(/404/i)
      ).toHaveCount(0);

      const BRAND = this.page
        .getByText(
          'Brand',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await BRAND.count() > 0) {
        Logger.info('Clicking on BRAND');
        await BRAND.click();
        Logger.info('Clicked on BRAND');

        const ADIDAS = this.page
          .getByText(
            'Adidas KIDS',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (await ADIDAS.count() > 0) {
          Logger.info('Clicking on ADIDAS');
          await ADIDAS.click();
          Logger.info('Clicked on ADIDAS');
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

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      const SCHOOL_TRAVEL = this.page
        .getByText(
          'School & Travel',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        SCHOOL_TRAVEL
      ).toBeVisible();

      Logger.info('Clicking on SCHOOL_TRAVEL');
      await SCHOOL_TRAVEL.click();
      Logger.info('Clicked on SCHOOL_TRAVEL');

      const COUNTRY = this.page
        .getByText(
          'Country of Origin',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await COUNTRY.count() > 0) {
        Logger.info('Clicking on COUNTRY');
        await COUNTRY.click();
        Logger.info('Clicked on COUNTRY');

        const INDIA = this.page
          .getByText(
            'India',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (await INDIA.count() > 0) {
          Logger.info('Clicking on INDIA');
          await INDIA.click();
          Logger.info('Clicked on INDIA');
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

      const PRODUCT_LINKS = this.page
        .getByRole('link')
        .filter({
          visible: true
        });

      let productsFound = 0;

      for (
        let index = 0;
        index < await PRODUCT_LINKS.count();
        index++
      ) {
        const href =
          await PRODUCT_LINKS
            .nth(index)
            .getAttribute('href');

        if (
          href &&
          href.includes('/product/')
        ) {
          productsFound++;

          if (productsFound === 3) {
            Logger.info('Clicking on PRODUCT_LINKS .nth(index)');
            await PRODUCT_LINKS
              .nth(index)
              .click();
            Logger.info('Clicked on PRODUCT_LINKS .nth(index)');

            break;
          }
        }
      }

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      await this.footer();

      const GADGETS = this.page
        .getByText(
          'Gadgets',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      Logger.info('Clicking on GADGETS');
      await GADGETS.click();
      Logger.info('Clicked on GADGETS');

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

        const HIGH_LOW = this.page
          .getByText(
            'Price High to Low',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (
          await HIGH_LOW.count() > 0
        ) {
          Logger.info('Clicking on HIGH_LOW');
          await HIGH_LOW.click();
          Logger.info('Clicked on HIGH_LOW');
        }
      }

      await Screenshot.capture(
        this.page,
        'TC03_Gadgets'
      );
      Logger.info('Completed: TestCase03Page.execute');
      runReport.record('PASS', 'Completed: TestCase03Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase03Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase03Page.execute');
      await Screenshot.capture(this.page, 'TestCase03Page_execute_failed');
      throw error;
    }
  }
}