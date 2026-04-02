import { expect, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async addProductToCart(productName: string) {
    const product = this.page.locator('.inventory_item').filter({
      has: this.page.getByText(productName),
    });

    await product.getByRole('button', { name: /add to cart/i }).click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async assertCartCount(count: string) {
    await expect(
      this.page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText(count);
  }
}