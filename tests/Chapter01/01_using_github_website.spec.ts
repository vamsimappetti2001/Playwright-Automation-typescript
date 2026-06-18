import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navagating to URL', async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();

  });
  
  await test.step('Enter username& Password', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('vandyvamsi');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('vandy');

  });

  await test.step(' click on the sign in button', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  });

   await test.step('validate the error mesaage', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');

  });
  
  
 
  
});