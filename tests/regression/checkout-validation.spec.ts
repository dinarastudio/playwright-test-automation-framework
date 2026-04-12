import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { users } from '../../src/data/users';

test.describe('Checkout validation', () => {
  test('shows error when first name is missing', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    await inventory.addProductToCart('Sauce Labs Backpack');
    await inventory.openCart();
    await cart.checkout();

    await checkout.fillInformation('', 'Tester', '12345');
    await checkout.assertErrorMessage('Error: First Name is required');
  });

  test('shows error when last name is missing', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    await inventory.addProductToCart('Sauce Labs Backpack');
    await inventory.openCart();
    await cart.checkout();

    await checkout.fillInformation('Kuma', '', '12345');
    await checkout.assertErrorMessage('Error: Last Name is required');
  });

  test('shows error when postal code is missing', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    await inventory.addProductToCart('Sauce Labs Backpack');
    await inventory.openCart();
    await cart.checkout();

    await checkout.fillInformation('Kuma', 'Actor', '');
    await checkout.assertErrorMessage('Error: Postal Code is required');
  });
});