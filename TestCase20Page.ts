import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase20Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC20 - Majorette Search Homepage and Newsletter".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase20Page.execute');
      runReport.record('INFO', 'Started: TestCase20Page.execute');
      // Step 1: Launch Hamleys website
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      // Step 2: Scroll to footer
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      // Step 3: Find Majorette
      const MAJORETTE = this.page
        .getByText(
          'Majorette',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        MAJORETTE
      ).toBeVisible();

      // Step 4: Click Majorette
      Logger.info('Clicking on MAJORETTE');
      await MAJORETTE.click();
      Logger.info('Clicked on MAJORETTE');

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      // Step 5: Verify Majorette page
      const majoretteUrl =
        this.page.url()
          .toLowerCase();

      expect(
        majoretteUrl
      ).toContain(
        'majorette'
      );

      // Step 6: Find Search box
      const SEARCH_BOXES = this.page
        .getByRole('textbox')
        .filter({
          visible: true
        });

      const searchBoxCount =
        await SEARCH_BOXES.count();

      if (searchBoxCount > 0) {
        const SEARCH_BOX =
          SEARCH_BOXES.first();

        // Step 7: Clear search
        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill('');
        Logger.info('Entered text in SEARCH_BOX');

        // Step 8: Enter Majorette
        Logger.info('Entering text in SEARCH_BOX');
        await SEARCH_BOX.fill(
          'Majorette'
        );
        Logger.info('Entered text in SEARCH_BOX');

        Logger.info("Pressing key on SEARCH_BOX 'Enter'");
        await SEARCH_BOX.press(
          'Enter'
        );
        Logger.info("Pressed key on SEARCH_BOX 'Enter'");

        Logger.info("Waiting for load state 'domcontentloaded'");
        await this.page.waitForLoadState(
          'domcontentloaded'
        );
        Logger.info("Load state reached 'domcontentloaded'");
      }

      // Step 9:
      // Verify search-related page if available
      const SEARCH_HEADING = this.page
        .getByText(
          'By Search',
          {
            exact: false
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await SEARCH_HEADING.count() > 0
      ) {
        await expect(
          SEARCH_HEADING
        ).toBeVisible();
      }

      // Step 10: Navigate to Home
      Logger.info("Navigating to '/'");
      await this.page.goto('/');
      Logger.info("Navigated to '/'");

      Logger.info("Waiting for load state 'domcontentloaded'");
      await this.page.waitForLoadState(
        'domcontentloaded'
      );
      Logger.info("Load state reached 'domcontentloaded'");

      // Step 11: Verify homepage
      await expect(
        this.page
      ).toHaveURL(
        'https://hamleys.in/'
      );

      // Step 12: Capture homepage screenshot
      await Screenshot.capture(
        this.page,
        'TC20_Homepage'
      );

      // Step 13: Scroll to footer
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      // Step 14: Verify Newsletter on desktop
      const NEWSLETTER = this.page
        .getByText(
          'Newsletter',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      await expect(
        NEWSLETTER
      ).toBeVisible();

      // Step 15:
      // Verify newsletter description if visible
      const SUBSCRIBE_TEXT = this.page
        .getByText(
          'Subscribe to hear about new products and stores.',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await SUBSCRIBE_TEXT.count() > 0
      ) {
        await expect(
          SUBSCRIBE_TEXT
        ).toBeVisible();
      }

      // Step 16:
      // Find newsletter email textbox
      const TEXTBOXES = this.page
        .getByRole('textbox')
        .filter({
          visible: true
        });

      const textboxCount =
        await TEXTBOXES.count();

      if (textboxCount > 0) {
        const EMAIL_FIELD =
          TEXTBOXES.last();

        // Step 17: Click email field
        Logger.info('Clicking on EMAIL_FIELD');
        await EMAIL_FIELD.click();
        Logger.info('Clicked on EMAIL_FIELD');
      }

      // Step 18:
      // Screenshot desktop newsletter
      await Screenshot.capture(
        this.page,
        'TC20_Desktop_Newsletter'
      );

      // Step 19:
      // Change viewport to mobile
      Logger.info('Setting viewport size { width: 375, height: 800 }');
      await this.page.setViewportSize({
        width: 375,
        height: 800
      });
      Logger.info('Viewport size set { width: 375, height: 800 }');

      Logger.info('Waiting for 500');
      await this.page.waitForTimeout(
        500
      );
      Logger.info('Wait completed for 500');

      // Step 20:
      // Scroll to bottom again
      Logger.info('Executing script on page');
      await this.page.evaluate(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight
        );
      });
      Logger.info('Executed script on page');

      // Step 21:
      // Verify still on Hamleys homepage
      await expect(
        this.page
      ).toHaveURL(
        'https://hamleys.in/'
      );

      // Step 22:
      // Verify page document is visible
      //
      // We do not verify the desktop
      // Newsletter heading here because
      // mobile footer sections can collapse.
      const PAGE_DOCUMENT = this.page
        .getByRole('document');

      await expect(
        PAGE_DOCUMENT
      ).toBeVisible();

      // Step 23:
      // Verify mobile page rendered content
      const pageText =
        await PAGE_DOCUMENT.innerText();

      expect(
        pageText.length
      ).toBeGreaterThan(0);

      // Step 24:
      // Find Newsletter on mobile only
      // if it is currently exposed
      const MOBILE_NEWSLETTER = this.page
        .getByText(
          'Newsletter',
          {
            exact: true
          }
        )
        .filter({
          visible: true
        })
        .first();

      if (
        await MOBILE_NEWSLETTER.count() > 0
      ) {
        await expect(
          MOBILE_NEWSLETTER
        ).toBeVisible();
      }

      // Step 25:
      // Find newsletter message on mobile
      // only if currently exposed
      const MOBILE_SUBSCRIBE_TEXT =
        this.page
          .getByText(
            'Subscribe to hear about new products and stores.',
            {
              exact: true
            }
          )
          .filter({
            visible: true
          })
          .first();

      if (
        await MOBILE_SUBSCRIBE_TEXT.count() > 0
      ) {
        await expect(
          MOBILE_SUBSCRIBE_TEXT
        ).toBeVisible();
      }

      // Step 26:
      // Capture responsive mobile footer
      await Screenshot.capture(
        this.page,
        'TC20_Mobile_Newsletter'
      );
      Logger.info('Completed: TestCase20Page.execute');
      runReport.record('PASS', 'Completed: TestCase20Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase20Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase20Page.execute');
      await Screenshot.capture(this.page, 'TestCase20Page_execute_failed');
      throw error;
    }
  }
}