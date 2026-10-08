// import { Page, expect } from '@playwright/test';
// import { takeScreenshot } from '../utils/Screenshot';

// export class TestCase13Page {
//   constructor(private page: Page) {}

//   async execute() {
//     await this.page.goto('/');

//     await this.page.waitForLoadState(
//       'domcontentloaded'
//     );

//     await this.page.evaluate(() => {
//       window.scrollTo(
//         0,
//         document.body.scrollHeight
//       );
//     });

//     const saleTerms = this.page
//       .getByText(
//         'Sale Terms & Conditions',
//         {
//           exact: true
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     await expect(
//       saleTerms
//     ).toBeVisible();

//     await saleTerms.click();

//     await this.page.waitForLoadState(
//       'domcontentloaded'
//     );

//     const heading = this.page
//       .getByText(
//         'Sale Terms',
//         {
//           exact: false
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     if (
//       await heading.count() > 0
//     ) {
//       await expect(
//         heading
//       ).toBeVisible();
//     }

//     const ham5 = this.page
//       .getByText(
//         'HAM5',
//         {
//           exact: false
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     if (
//       await ham5.count() > 0
//     ) {
//       await ham5
//         .scrollIntoViewIfNeeded();

//       await expect(
//         ham5
//       ).toBeVisible();
//     }

//     await takeScreenshot(
//       this.page,
//       'TC13_Sale_Terms'
//     );

//     const ham10 = this.page
//       .getByText(
//         'HAM10',
//         {
//           exact: false
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     if (
//       await ham10.count() > 0
//     ) {
//       await expect(
//         ham10
//       ).toBeVisible();
//     }

//     await this.page.goto('/');

//     const searchBox = this.page
//       .getByRole('textbox')
//       .filter({
//         visible: true
//       })
//       .first();

//     if (
//       await searchBox.count() > 0
//     ) {
//       await searchBox.fill(
//         'MobiKwik Offer'
//       );

//       await searchBox.press(
//         'Enter'
//       );
//     }

//     await takeScreenshot(
//       this.page,
//       'TC13_MobiKwik'
//     );

//     await this.page.goto('/');

//     await this.page.evaluate(() => {
//       window.scrollTo(
//         0,
//         document.body.scrollHeight
//       );
//     });

//     const links = this.page
//       .getByRole('link')
//       .filter({
//         visible: true
//       });

//     const linkCount =
//       await links.count();

//     for (
//       let index = 0;
//       index < linkCount;
//       index++
//     ) {
//       const href =
//         await links
//           .nth(index)
//           .getAttribute('href');

//       if (
//         href &&
//         href.toLowerCase()
//           .includes('facebook')
//       ) {
//         const facebookPromise =
//           this.page
//             .context()
//             .waitForEvent('page')
//             .catch(() => null);

//         await links
//           .nth(index)
//           .click();

//         const facebookPage =
//           await facebookPromise;

//         if (facebookPage) {
//           await facebookPage
//             .waitForLoadState(
//               'domcontentloaded'
//             )
//             .catch(() => {});

//           await takeScreenshot(
//             facebookPage,
//             'TC13_Facebook'
//           );

//           await facebookPage.close();
//         }

//         break;
//       }
//     }
//   }
// }

//updated:
import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase13Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC13 - Sale Terms Coupon Codes Offers and Facebook".
   * Parameters: None
   * Return Type: Promise<void>
   */
  public async execute(): Promise<void> {
    try {
      Logger.info('Started: TestCase13Page.execute');
      runReport.record('INFO', 'Started: TestCase13Page.execute');
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

      const SALE_TERMS = this.page
        .getByText(
          'Sale Terms & Conditions',
          {
            exact: true
          }
        )
        .first();

      await expect(
        SALE_TERMS
      ).toBeVisible();

      Logger.info('Clicking on SALE_TERMS');
      await SALE_TERMS.click();
      Logger.info('Clicked on SALE_TERMS');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      const HEADING = this.page
        .getByText(
          'Sale Terms',
          {
            exact: false
          }
        )
        .first();

      if (await HEADING.count() > 0) {
        await expect(
          HEADING
        ).toBeVisible();
      }

      const HAM5 = this.page
        .getByText('HAM5', {
          exact: false
        })
        .first();

      if (await HAM5.count() > 0) {
        Logger.info('Scrolling into view HAM5');
        await HAM5.scrollIntoViewIfNeeded();
        Logger.info('Scrolled into view HAM5');

        await expect(
          HAM5
        ).toBeVisible();
      }

      const HAM10 = this.page
        .getByText('HAM10', {
          exact: false
        })
        .first();

      if (await HAM10.count() > 0) {
        await expect(
          HAM10
        ).toBeVisible();
      }

      await Screenshot.capture(
        this.page,
        'TC13_Sale_Terms'
      );

      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      const SEARCH_BOX = this.page
        .getByRole('textbox')
        .first();

      if (await SEARCH_BOX.count() > 0) {
        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill(
          'MobiKwik Offer'
        );
        Logger.info('Entered text in SEARCH_BOX');

        Logger.info("Pressing key on SEARCH_BOX 'Enter'");
        await SEARCH_BOX.press('Enter');
        Logger.info("Pressed key on SEARCH_BOX 'Enter'");
      }

      await Screenshot.capture(
        this.page,
        'TC13_MobiKwik'
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

      // Facebook Validation
      const FACEBOOK_LINK =
        this.page.locator(
          'a[href*="facebook"]'
        );

      await expect(
        FACEBOOK_LINK.first()
      ).toBeVisible();

      const facebookHref =
        await FACEBOOK_LINK
          .first()
          .getAttribute('href');

      expect(facebookHref).toContain(
        'facebook'
      );
      Logger.info('Completed: TestCase13Page.execute');
      runReport.record('PASS', 'Completed: TestCase13Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase13Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase13Page.execute');
      await Screenshot.capture(this.page, 'TestCase13Page_execute_failed');
      throw error;
    }
  }
}