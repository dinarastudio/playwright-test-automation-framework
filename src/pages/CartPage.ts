import { expect, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertProductVisible(productName: string) {
    const item = this.page.locator('.cart_item').filter({
      has: this.page.getByText(productName),
    });

    await expect(item).toBeVisible();
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}