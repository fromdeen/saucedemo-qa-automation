const { test, expect } = require('@playwright/test');

test('Add item to cart and verify badge', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('text=Add to cart', { timeout: 5000 });
  const badge = await page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('1');
});

test('Remove item from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('text=Add to cart');
  await page.click('text=Remove');

  const badge = await page.locator('.shopping_cart_badge');
  await expect(badge).toHaveCount(0); 
});
