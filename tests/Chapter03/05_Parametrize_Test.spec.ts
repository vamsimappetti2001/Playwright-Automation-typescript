// import playwright module
import { test, expect } from '@playwright/test'

const searchKeywords = ['playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by testers Talk']

for (const searchKeyword of searchKeywords) {

    // write a test 
    test(`Parametrize Tests in Playwright ${searchKeyword}`, async ({ page }) => {

        // go to url
        await page.goto('https://www.google.com/');

        // search for a keywords
        await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        // click on the playlist
        await page.getByRole('link', { name: searchKeyword }).first().click()

        //Validate web page title
        await expect(page).toHaveTitle(new RegExp(searchKeyword, 'i'));

    }); 
}
