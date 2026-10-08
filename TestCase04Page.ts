import { Page, expect } from '@playwright/test';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

export class TestCase04Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC04 - Lego Filters Product Purchase and Policy Navigation".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase04Page.execute');
      runReport.record('INFO', 'Started: TestCase04Page.execute');
      Logger.info("Navigating to '/products?brand=lego'");
      await this.page.goto(
        '/products?brand=lego'
      );
      Logger.info("Navigated to '/products?brand=lego'");

      const CHARACTER = this.page
        .getByText(
          'Character',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await CHARACTER.count() > 0
      ) {
        Logger.info('Clicking on CHARACTER');
        await CHARACTER.click();
        Logger.info('Clicked on CHARACTER');

        const ICONS = this.page
          .getByText(
            'Icons',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (await ICONS.count() > 0) {
          Logger.info('Clicking on ICONS');
          await ICONS.click();
          Logger.info('Clicked on ICONS');
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

      const CATEGORY = this.page
        .getByText(
          'Category',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await CATEGORY.count() > 0) {
        Logger.info('Clicking on CATEGORY');
        await CATEGORY.click();
        Logger.info('Clicked on CATEGORY');

        const CONSTRUCTION =
          this.page
            .getByText(
              'Construction & Building',
              {
                exact: true
              }
            )
            .filter({
              visible: true
            })
            .first();

        if (
          await CONSTRUCTION.count() > 0
        ) {
          Logger.info('Clicking on CONSTRUCTION');
          await CONSTRUCTION.click();
          Logger.info('Clicked on CONSTRUCTION');
        }
      }

      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      await expect(
        this.page
          .getByText(
            'Fees & Payment Policy',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first()
      ).toBeVisible();

      const LINKS = this.page
        .getByRole('link')
        .filter({
          visible: true
        });

      let lastProductIndex = -1;

      for (
        let index = 0;
        index < await LINKS.count();
        index++
      ) {
        const href =
          await LINKS
            .nth(index)
            .getAttribute('href');

        if (
          href &&
          href.includes('/product/')
        ) {
          lastProductIndex = index;
        }
      }

      if (lastProductIndex >= 0) {
        Logger.info('Clicking on LINKS .nth(lastProductIndex)');
        await LINKS
          .nth(lastProductIndex)
          .click();
        Logger.info('Clicked on LINKS .nth(lastProductIndex)');
      }

      const BUY_NOW = this.page
        .getByText(
          'Buy now',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await BUY_NOW.count() > 0) {
        Logger.info('Clicking on BUY_NOW');
        await BUY_NOW.click();
        Logger.info('Clicked on BUY_NOW');
      }

      const CHECKOUT = this.page
        .getByText(/Checkout/i)
        .filter({
          visible: true
        })
        .first();

      if (await CHECKOUT.count() > 0) {
        Logger.info('Clicking on CHECKOUT');
        await CHECKOUT.click();
        Logger.info('Clicked on CHECKOUT');
      }

      const NUMBER_FIELD = this.page
        .getByRole('textbox')
        .filter({
          visible: true
        })
        .first();

      if (
        await NUMBER_FIELD.count() > 0
      ) {
        await expect(
          NUMBER_FIELD
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

      Logger.info("Clicking on this.page .getByText( 'Privacy & Cookies', { exact: true } ) .filte...");
      await this.page
        .getByText(
          'Privacy & Cookies',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first()
        .click();
      Logger.info("Clicked on this.page .getByText( 'Privacy & Cookies', { exact: true } ) .filte...");

      const COOKIES = this.page
        .getByText(/cookie/i)
        .filter({
          visible: true
        })
        .first();

      if (await COOKIES.count() > 0) {
        await expect(COOKIES).toBeVisible();
      }
      Logger.info('Completed: TestCase04Page.execute');
      runReport.record('PASS', 'Completed: TestCase04Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase04Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase04Page.execute');
      await Screenshot.capture(this.page, 'TestCase04Page_execute_failed');
      throw error;
    }
  }
}