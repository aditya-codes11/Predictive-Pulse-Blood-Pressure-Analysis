import { Page, expect } from '@playwright/test';
import { Screenshot } from '../utils/Screenshot';
import Logger from '../utils/Logger';
import { runReport } from '../utils/RunReport';

export class TestCase10Page {
  constructor(private page: Page) {}

  /**
   * Author: Aditya Nimbolkar
   * Method Name: execute
   * Description: Executes test case "TC10 - Newsletter Subscription Validation".
   * Parameters: None
   * Return Type: Promise<void>
   */
  async execute() {
    try {
      Logger.info('Started: TestCase10Page.execute');
      runReport.record('INFO', 'Started: TestCase10Page.execute');
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

      const EMAIL = this.page
        .getByPlaceholder(/email/i)
        .filter({
          visible: true
        })
        .first();

      await expect(EMAIL).toBeVisible();

      const SUBSCRIBE = this.page
        .getByText(/Subscribe/i)
        .filter({
          visible: true
        })
        .first();

      await expect(
        SUBSCRIBE
      ).toBeVisible();

      await Screenshot.capture(
        this.page,
        'TC10_Newsletter_Initial'
      );

      Logger.info('Clicking on SUBSCRIBE');
      await SUBSCRIBE.click();
      Logger.info('Clicked on SUBSCRIBE');

      const invalidEmails = [
        'abc',
        'abc@domain',
        'test user@example.com'
      ];

      for (
        const invalidEmail
        of invalidEmails
      ) {
        Logger.info('Entering text in EMAIL');
        await EMAIL.fill('');
        Logger.info('Entered text in EMAIL');

        Logger.info('Entering text in EMAIL');
        await EMAIL.fill(
          invalidEmail
        );
        Logger.info('Entered text in EMAIL');

        Logger.info('Clicking on SUBSCRIBE');
        await SUBSCRIBE.click();
        Logger.info('Clicked on SUBSCRIBE');
      }

      await Screenshot.capture(
        this.page,
        'TC10_Invalid_Email'
      );

      Logger.info('Entering text in EMAIL');
      await EMAIL.fill('');
      Logger.info('Entered text in EMAIL');

      Logger.info('Entering text in EMAIL');
      await EMAIL.fill(
        'hamleys.test@example.com'
      );
      Logger.info('Entered text in EMAIL');

      Logger.info('Clicking on SUBSCRIBE');
      await SUBSCRIBE.click();
      Logger.info('Clicked on SUBSCRIBE');

      await Screenshot.capture(
        this.page,
        'TC10_Subscription'
      );

      Logger.info('Entering text in EMAIL');
      await EMAIL.fill(
        'hamleys.test@example.com'
      );
      Logger.info('Entered text in EMAIL');

      Logger.info("Pressing key on EMAIL 'Tab'");
      await EMAIL.press('Tab');
      Logger.info("Pressed key on EMAIL 'Tab'");

      Logger.info("Pressing key on this.page.keyboard 'Enter'");
      await this.page.keyboard.press(
        'Enter'
      );
      Logger.info("Pressed key on this.page.keyboard 'Enter'");

      Logger.info('Reloading page');
      await this.page.reload();
      Logger.info('Reloaded page');
      Logger.info('Completed: TestCase10Page.execute');
      runReport.record('PASS', 'Completed: TestCase10Page.execute');
    } catch (error) {
      Logger.error(`Failed: TestCase10Page.execute - ${error instanceof Error ? error.message : String(error)}`);
      runReport.record('FAIL', 'Failed: TestCase10Page.execute');
      await Screenshot.capture(this.page, 'TestCase10Page_execute_failed');
      throw error;
    }
  }
}