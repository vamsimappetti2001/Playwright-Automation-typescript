// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('Multiple Broswers/tabs in playwright TypeScript ', async ({page, browser}) => { 
   
// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()

//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();

  
// New broswer session
   const context2 = await browser.newContext();
   const page2 = await context2.newPage();

// go to url
    await page2.goto('https://www.google.com/');

// search for a keywords
    await page2.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page2.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page2.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()

//Validate web page2 title
   await expect(page2.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();

//  Create new tab
   const newTab= await context2.newPage();
    // go to url
    await newTab.goto('https://www.google.com/');

// search for a keywords
    await newTab.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await newTab.getByRole('combobox', { name: 'Search' }).press('Enter');

});