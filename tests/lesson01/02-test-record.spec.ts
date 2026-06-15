// import playwright module
import {test, expect} from '@playwright/test'

// write a test case
test('My First playwright TypeScript Test', async ({page}) => { 

    // go to url
    await page.goto('https://www.google.com/');

    // search for a keywords
    await page.getByLabel('Search', { exact: 'true' }).fill('Playwright with testerstalk');

    // click on the search button
    await page.getByRole('button', { name: 'Google Search', exact: 'true' }).click();
});