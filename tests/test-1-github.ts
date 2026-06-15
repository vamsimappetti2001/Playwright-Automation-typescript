import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('vandyvamsi');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('vamsivandy');
  await page.getByRole('button', { name: 'Sign in', exact: true }).dblclick();
  await page.getByRole('button', { name: 'Sign in' }).dblclick();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});