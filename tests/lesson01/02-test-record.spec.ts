// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('My First Playwright TypeScript Test', async ({page}) => { 

// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testrs talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

     // click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
    await page.waitForLoadState('networkidle');

//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
});





//await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube');