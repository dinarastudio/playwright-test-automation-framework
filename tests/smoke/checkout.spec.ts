import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { CheckoutOverviewPage } from '../../src/pages/CheckoutOverviewPage';
import { users } from '../../src/data/users';

test.describe('Checkout flow', () => {
  test('user can complete checkout successfully @smoke', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const overview = new CheckoutOverviewPage(page);

    //Login
    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    //Add product
    await inventory.addProductToCart('Sauce Labs Backpack');
    await inventory.assertCartCount('1');

    //Go to cart
    await inventory.openCart();
    await cart.assertProductVisible('Sauce Labs Backpack');

    //Checkout
    await cart.checkout();
    await checkout.fillInformation('Dina', 'Test', '12345');

    //Finish purchase
    await overview.finish();
    await overview.assertSuccess();
  });
});