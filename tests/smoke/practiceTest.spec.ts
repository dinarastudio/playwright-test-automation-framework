// import {test, expect} from '@playwright/test';

// test ('launch google search and search for Playwright Test', async ({page})=> {
//     await page.goto("https://www.google.com");
//     await page.locator('[name ="q"]').fill("Playwright");
//     await page.keyboard.press('Enter');
//      // Wait for results to load
//     await page.waitForLoadState('networkidle');
//      // Step 4 - verify results page loaded
//     await page.getByRole('link', {name: /Playwright/}).first().click();
//     await expect(page).toHaveURL(/playwright\.dev/);
//     await expect(page).toHaveTitle(/Playwright/);
   
// })

test('verify Playwright docs title', async ({page}) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page).toHaveURL(/playwright\.dev/);
})

// "Write a Playwright test that:

// Goes to https://www.saucedemo.com
// Logs in with standard_user / secret_sauce
// Verifies successful login by checking inventory page loads
// Verifies at least one product is visible"
 
import {test, expect} from '@playwright/test';

test('login to saucedemo as standard user', async ({page})=> {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button', {name: 'Login'}).click();

      // Verify successful login
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_container')).toBeVisible()
})

test('login to sauce demo with locked out user creds', async ({page})=> {
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder('Username').fill("locked_out_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button', {name: 'Login'}).click();
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('locked out');
})





// "Write a test that:
// Logs into saucedemo
// Adds the first product to cart
// Verifies cart shows 1 item"



test('add a product to cart and validate cart shoos one item', async ({page}) => {
 await page.goto("https://www.saucedemo.com");
 await page.getByPlaceholder('Username').fill("standard_user");
 await page.getByPlaceholder('Password').fill("secret_sauce");
 await page.getByRole('button', {name: 'Login'}).click();
 await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
 // Verify badge shows 1 first
await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
 await page.locator('.shopping_cart_badge').click();
 const cartItemQuantity = page.locator('[data-test="item-quantity"]');
 await expect(cartItemQuantity).toHaveText('1');

})

function fizzBuzz(n: number): void {
for (let i = 1; i <= n; i++){
     if(i%3 === 0 && i%5 === 0){
         console.log('FizzBuzz');

} else if(i % 3 === 0){
    console.log('Fizz'); 
} else if( i%5 === 0){
   console.log('Buzz');
}
    else {
       console.log(i); 
    }
   }
}
fizzBuzz(100)

function findDuplicates(arr: number[]): number[] {
    const duplicates: number[] = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
            }

            }
        }
     return duplicates;
    }

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5]));