import { Page, expect } from '@playwright/test';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';
import { Screenshot } from '../utils/Screenshot';

export class TestCase02Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC02 - Baby Gear Listing Cart Operations and Footer Links".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase02Page.execute');
      runReport.record('INFO', 'Started: TestCase02Page.execute');
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

      const BABY_GEAR = this.page
        .getByText(
          'Baby Gear & Utility',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        BABY_GEAR
      ).toBeVisible();

      Logger.info('Clicking on BABY_GEAR');
      await BABY_GEAR.click();
      Logger.info('Clicked on BABY_GEAR');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const PRODUCT_COUNT = this.page
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

      if (
        await PRODUCT_COUNT.count() > 0
      ) {
        await expect(
          PRODUCT_COUNT
        ).toBeVisible();
      }

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

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      let productAdded = false;

      const LISTING_ADD_TO_BAG =
        this.page
          .getByText(
            'Addto bag',
            {
              exact: false
            }
          )
          .filter({
            visible: true
          })
          .first();

      if (
        await LISTING_ADD_TO_BAG.count() > 0
      ) {
        Logger.info('Clicking on LISTING_ADD_TO_BAG');
        await LISTING_ADD_TO_BAG.click();
        Logger.info('Clicked on LISTING_ADD_TO_BAG');

        productAdded = true;
      }

      if (!productAdded) {
        const PRICE = this.page
          .getByText(
            '₹',
            {
              exact: false
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (
          await PRICE.count() > 0
        ) {
          Logger.info('Clicking on PRICE');
          await PRICE.click();
          Logger.info('Clicked on PRICE');

          Logger.info("Waiting for load state 'domcontentloaded'");
          await this.page.waitForLoadState(
            'domcontentloaded'
          );
          Logger.info("Load state reached 'domcontentloaded'");
        }

        const PRODUCT_ADD_TO_BAG =
          this.page
            .getByText(
              'Add to bag',
              {
                exact: true
              }
            )
            .filter({
              visible: true
            })
            .first();

        if (
          await PRODUCT_ADD_TO_BAG.count() > 0
        ) {
          Logger.info('Clicking on PRODUCT_ADD_TO_BAG');
          await PRODUCT_ADD_TO_BAG.click();
          Logger.info('Clicked on PRODUCT_ADD_TO_BAG');

          productAdded = true;
        }
      }

      const MY_BAG = this.page
        .getByText(
          'My bag',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        MY_BAG
      ).toBeVisible();

      Logger.info('Clicking on MY_BAG');
      await MY_BAG.click();
      Logger.info('Clicked on MY_BAG');

      await expect(
        this.page
      ).toHaveURL(/cart\/bag/i);

      const INCREASE_BUTTONS =
        this.page
          .getByRole('button')
          .filter({
            visible: true
          });

      const buttonCount =
        await INCREASE_BUTTONS.count();

      for (
        let index = 0;
        index < buttonCount;
        index++
      ) {
        const text =
          await INCREASE_BUTTONS
            .nth(index)
            .innerText()
            .catch(() => '');

        const accessibleName =
          await INCREASE_BUTTONS
            .nth(index)
            .getAttribute(
              'aria-label'
            );

        if (
          text.trim() === '+' ||
          accessibleName
            ?.toLowerCase()
            .includes('increase')
        ) {
          Logger.info('Clicking on INCREASE_BUTTONS .nth(index)');
          await INCREASE_BUTTONS
            .nth(index)
            .click();
          Logger.info('Clicked on INCREASE_BUTTONS .nth(index)');

          break;
        }
      }

      const REMOVE = this.page
        .getByText(
          'Remove',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await REMOVE.count() > 0
      ) {
        Logger.info('Clicking on REMOVE');
        await REMOVE.click();
        Logger.info('Clicked on REMOVE');
      }

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

      const TERMS = this.page
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
        TERMS
      ).toBeVisible();

      Logger.info('Clicking on TERMS');
      await TERMS.click();
      Logger.info('Clicked on TERMS');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

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

      await expect(
        PRIVACY
      ).toBeVisible();

      Logger.info('Clicking on PRIVACY');
      await PRIVACY.click();
      Logger.info('Clicked on PRIVACY');
      Logger.info('Completed: TestCase02Page.execute');
      runReport.record('PASS', 'Completed: TestCase02Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase02Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase02Page.execute');
      await Screenshot.capture(this.page, 'TestCase02Page_execute_failed');
      throw error;
    }
  }
}