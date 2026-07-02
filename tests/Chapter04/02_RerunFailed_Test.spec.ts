// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('Test 1', async ({page}) => { 
    
// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
    
//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();

});

test('Test 2', async ({page}) => { 
    expect(true).toBe(false);

// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
   
//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();

});

test('Test 3', async ({page}) => {
   expect(true).toBe(false);
// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
    //await page.waitForLoadState('networkidle');

//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();

});