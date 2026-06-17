// import playwright module
import {test, expect} from '@playwright/test'

test.beforeAll(async () =>{
    console.log('Running before all tests');
});    

test.beforeEach(async ({page}) =>{
    console.log('Running before each tests..');
    await page.goto('https://www.google.com/');    

});

test.afterAll(async () => {
    console.log('Running after all tests');
});    

test.afterEach(async () => {
    console.log('Running after each tests');    
});

// write a test 
test('Test 1', async ({page}) => { 
    //console.log('Test 1 is running');

// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testrs talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
   

//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();


   

});



test('Test 2', async ({page}) => { 
    console.log('Test 2 is running');
// go to url
    await page.goto('https://www.google.com/');

// search for a keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testrs talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// click on the playlists
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
    

//Validate web page title
   await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();


   

});