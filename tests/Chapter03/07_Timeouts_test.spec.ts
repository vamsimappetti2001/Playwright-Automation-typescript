// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('TImeouts in  Playwright TypeScript Test', async ({page}) => { 
    test.setTimeout(1 * 60 * 1000)

// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().  click({timeout : 8000});
   
//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright typescript Tutorial Full'})).toBeVisible();
   
   //await page.waitForTimeout(70000);

});