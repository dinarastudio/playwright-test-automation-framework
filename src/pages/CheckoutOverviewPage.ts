import { expect, Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async finish() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async assertSuccess() {
    await expect(
      this.page.locator('[data-test="complete-header"]')
    ).toContainText('Thank you');
  }
}