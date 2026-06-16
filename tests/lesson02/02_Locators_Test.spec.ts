// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('Locators in Playwright', async ({page}) => { 

// go to url
    await page.goto('https://github.com/vamsimappetti2001');

// getbyrole locator
    //await page.getByRole('link',{name:'Sign in'}).click();     
 
// getbylabel locator
    //await page.getByLabel('Homepage', { exact : true}).first().click();

//getbyAltText locator
    //await page.getByAltText("View vamsimappetti2001's full-sized avatar").click();

// getbyTestId locator    
    await page.getByTestId("repositories").click();    
});