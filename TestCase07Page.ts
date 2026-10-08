// import { Page, expect } from '@playwright/test';
// import { takeScreenshot } from '../utils/Screenshot';

// export class TestCase07Page {
//   constructor(private page: Page) {}

//   async scrollFooter() {
//     await this.page.evaluate(() => {
//       window.scrollTo(
//         0,
//         document.body.scrollHeight
//       );
//     });
//   }

//   async execute() {
//     await this.page.goto('/');

//     await this.scrollFooter();

//     const about = this.page
//       .getByText(
//         'About Hamleys',
//         {
//           exact: true
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     await expect(about).toBeVisible();

//     const toyStory = this.page
//       .getByText(
//         'Our Toy Story',
//         {
//           exact: true
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     await expect(toyStory).toBeVisible();

//     await toyStory.click();

//     await expect(
//       this.page.getByText(
//         '404',
//         {
//           exact: true
//         }
//       )
//     ).toHaveCount(0);

//     await this.page.goto('/');

//     await this.scrollFooter();

//     const storeLocator = this.page
//       .getByText(
//         'Store Locator',
//         {
//           exact: true
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     await expect(
//       storeLocator
//     ).toBeVisible();

//     await storeLocator.click();

//     await this.page.waitForLoadState(
//       'domcontentloaded'
//     );

//     const textbox = this.page
//       .getByRole('textbox')
//       .filter({
//         visible: true
//       })
//       .first();

//     if (
//       await textbox.count() > 0
//     ) {
//       await textbox.fill(
//         '411001'
//       );

//       await textbox.press('Enter');
//     }

//     await this.page.goto('/');

//     await this.scrollFooter();

//     const giftCard = this.page
//       .getByText(
//         'Buy Luxe Gift Card',
//         {
//           exact: true
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     if (
//       await giftCard.count() > 0
//     ) {
//       await expect(
//         giftCard
//       ).toBeVisible();
//     }

//     const contact = this.page
//       .getByText(
//         'Get in Touch with Team Hamleys',
//         {
//           exact: true
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     if (
//       await contact.count() > 0
//     ) {
//       await contact.click();

//       await takeScreenshot(
//         this.page,
//         'TC07_Contact'
//       );
//     }

//     await this.page.goto('/');

//     await this.scrollFooter();

//     const delivery = this.page
//       .getByText(
//         'Delivery Policy',
//         {
//           exact: true
//         }
//       )
//       .filter({
//         visible: true
//       })
//       .first();

//     await expect(delivery).toBeVisible();

//     await delivery.click();

//     await this.page.goto('/');

//     await this.scrollFooter();

//     const links = this.page
//       .getByRole('link')
//       .filter({
//         visible: true
//       });

//     const linkCount =
//       await links.count();

//     let facebookFound = false;

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
//         facebookFound = true;
//         break;
//       }
//     }

//     if (facebookFound) {
//       expect(
//         facebookFound
//       ).toBeTruthy();
//     }
//   }
// }

//updated ::
import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase07Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: scrollFooter
   * Description: Scrolls the page to the bottom so that the footer section is in view.
   * Parameters: None
   * Return Type: Promise<void>
   */
  public async scrollFooter(): Promise<void> {
    try {
      Logger.info('Started: TestCase07Page.scrollFooter');
      runReport.record('INFO', 'Started: TestCase07Page.scrollFooter');
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');
      Logger.info('Completed: TestCase07Page.scrollFooter');
      runReport.record('PASS', 'Completed: TestCase07Page.scrollFooter');
    } catch (error) {
      Logger.error(`Failed: TestCase07Page.scrollFooter - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase07Page.scrollFooter');
      await Screenshot.capture(this.page, 'TestCase07Page_scrollFooter_failed');
      throw error;
    }
  }

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC07 - About Hamleys Links and Store Locator".
   * Parameters: None
   * Return Type: Promise<void>
   */
  public async execute(): Promise<void> {
    try {
      Logger.info('Started: TestCase07Page.execute');
      runReport.record('INFO', 'Started: TestCase07Page.execute');
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      // About Hamleys
      await this.scrollFooter();

      const ABOUT = this.page.getByText(
        'About Hamleys',
        { exact: true }
      );

      await expect(ABOUT).toBeVisible();

      // Our Toy Story
      const TOY_STORY = this.page.getByRole(
        'link',
        {
          name: 'Our Toy Story'
        }
      );

      await expect(TOY_STORY).toBeVisible();

      Logger.info('Clicking on TOY_STORY');
      await TOY_STORY.click();
      Logger.info('Clicked on TOY_STORY');

      await expect(this.page).toHaveURL(
        /about-us/
      );

      Logger.info('Navigating back');
      await this.page.goBack();
      Logger.info('Navigated back');

      // Store Locator
      await this.scrollFooter();

      const STORE_LOCATOR = this.page.getByRole(
        'link',
        {
          name: 'Store Locator'
        }
      );

      await expect(STORE_LOCATOR).toBeVisible();

      const storeLocatorHref =
        await STORE_LOCATOR.getAttribute(
          'href'
        );

      expect(storeLocatorHref).toBeTruthy();

      // Buy Luxe Gift Card
      const GIFT_CARD = this.page.getByRole(
        'link',
        {
          name: 'Buy Luxe Gift Card'
        }
      );

      if (await GIFT_CARD.count() > 0) {
        await expect(GIFT_CARD).toBeVisible();
      }

      // Get in Touch with Team Hamleys
      const CONTACT = this.page.getByRole(
        'link',
        {
          name: 'Get in Touch with Team Hamleys'
        }
      );

      if (await CONTACT.count() > 0) {
        await expect(CONTACT).toBeVisible();

        await Screenshot.capture(
          this.page,
          'TC07_Contact'
        );
      }

      // Delivery Policy
      await this.scrollFooter();

      const DELIVERY = this.page.getByRole(
        'link',
        {
          name: 'Delivery Policy'
        }
      );

      await expect(DELIVERY).toBeVisible();

      Logger.info('Clicking on DELIVERY');
      await DELIVERY.click();
      Logger.info('Clicked on DELIVERY');

      await expect(this.page).toHaveURL(
        /delivery-policy/
      );

      Logger.info('Navigating back');
      await this.page.goBack();
      Logger.info('Navigated back');

      // Facebook Link Validation
      await this.scrollFooter();

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
      Logger.info('Completed: TestCase07Page.execute');
      runReport.record('PASS', 'Completed: TestCase07Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase07Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase07Page.execute');
      await Screenshot.capture(this.page, 'TestCase07Page_execute_failed');
      throw error;
    }
  }
}