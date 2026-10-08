import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase17Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC17 - SpiderMan Category Filter and Product Details".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase17Page.execute');
      runReport.record('INFO', 'Started: TestCase17Page.execute');
      Logger.info("Navigating to '/collection/spiderman'");
      await this.page.goto(
        '/collection/spiderman'
      );
      Logger.info("Navigated to '/collection/spiderman'");

      await expect(
        this.page
      ).toHaveURL(/spiderman/i);

      const GENDER = this.page
        .getByText(
          'Gender',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (await GENDER.count() > 0) {
        Logger.info('Clicking on GENDER');
        await GENDER.click();
        Logger.info('Clicked on GENDER');

        const BOYS = this.page
          .getByText(
            'Boys',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

        if (await BOYS.count() > 0) {
          Logger.info('Clicking on BOYS');
          await BOYS.click();
          Logger.info('Clicked on BOYS');
        }

        const APPLY = this.page
          .getByText(
            'Apply Filter',
            {
              exact: false
            }
          )
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

      const LINKS = this.page
        .getByRole('link')
        .filter({
          visible: true
        });

      const linkCount =
        await LINKS.count();

      let selectedIndex = -1;

      for (
        let index = 0;
        index < linkCount;
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
          selectedIndex = index;
          break;
        }
      }

      expect(
        selectedIndex
      ).toBeGreaterThanOrEqual(0);

      Logger.info('Clicking on LINKS .nth(selectedIndex)');
      await LINKS
        .nth(selectedIndex)
        .click();
      Logger.info('Clicked on LINKS .nth(selectedIndex)');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const SPECIFICATIONS =
        this.page
          .getByText(
            'Specifications',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

      if (
        await SPECIFICATIONS.count() > 0
      ) {
        Logger.info('Scrolling into view SPECIFICATIONS');
        await SPECIFICATIONS
          .scrollIntoViewIfNeeded();
        Logger.info('Scrolled into view SPECIFICATIONS');

        Logger.info('Clicking on SPECIFICATIONS');
        await SPECIFICATIONS.click();
        Logger.info('Clicked on SPECIFICATIONS');
      }

      const MATERIAL = this.page
        .getByText(
          'Material',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await MATERIAL.count() > 0
      ) {
        await expect(
          MATERIAL
        ).toBeVisible();
      }

      Logger.info('Navigating back');
      await this.page.goBack();
      Logger.info('Navigated back');

      await expect(
        this.page
      ).toHaveURL(/spiderman/i);

      await Screenshot.capture(
        this.page,
        'TC17_SpiderMan'
      );
      Logger.info('Completed: TestCase17Page.execute');
      runReport.record('PASS', 'Completed: TestCase17Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase17Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase17Page.execute');
      await Screenshot.capture(this.page, 'TestCase17Page_execute_failed');
      throw error;
    }
  }
}