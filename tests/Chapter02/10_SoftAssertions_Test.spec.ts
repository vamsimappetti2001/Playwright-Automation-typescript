// import playwright module
import{test, expect}from '@playwright/test'

//write a test case 
test('Soft Assertions in playwright', async({ page }) =>{
    //Go to url
    await page.goto('https://www.youtube.com/');

    //Visible, editable, enabled, empty
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search', {exact : true}).first()).toBeEmpty();


    //verify Url, Title, Text, Count
    await page.getByPlaceholder('Search', {exact : true}).first().click();
    await page.getByPlaceholder('Search', {exact : true}).first().fill('testers talk ');
    await page.getByPlaceholder('Search', {exact : true}).first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=testers+talk+');

    await expect.soft(page).toHaveTitle(' testers talks - YouTube');

    await expect(page.locator('span[id="title"]').first()).toHaveText('Latest from Testers Talk');

    await expect(page.locator('span[id = "title"]')).toHaveCount(1);


});