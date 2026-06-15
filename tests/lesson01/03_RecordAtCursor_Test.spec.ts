// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('Record at Cursor Test', async ({page}) => { 

// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
   await page.waitForLoadState('networkidle');
   await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
    

//Validate web page title
   await page.getByRole('link', { name: ' Playwright by Testers Talk - Youtube' });

   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
   await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
   await expect(page.getByLabel('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial 6 hours,')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
   await expect(page.getByLabel('#2 Playwright API Testing Tutorial Crash Course 2024 1 hour, 59 minutes')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');   



});    