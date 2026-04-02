import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { users } from '../../src/data/users';

test.describe('Login', () => {
  test('valid login', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);
    await inventory.assertLoaded();
  });

  test('invalid login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.invalid.username, users.invalid.password);
    await login.assertLoginError();
  });
});