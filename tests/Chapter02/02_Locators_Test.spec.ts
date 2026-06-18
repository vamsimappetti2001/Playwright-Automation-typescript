// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('Locators in Playwright', async ({page}) => { 

// go to url
    //await page.goto('https://github.com/vamsimappetti2001');

// getbyrole locator
    //await page.getByRole('link',{name:'Sign in'}).click();     
 
// getbylabel locator
    //await page.getByLabel('Homepage', { exact : true}).first().click();

//getbyAltText locator
    //await page.getByAltText("View vamsimappetti2001's full-sized avatar").click();

// getbyTestId locator    
    //await page.getByTestId("repositories").first().click();
    //await page.getByTestId("projects").first().click();
    
// get ByText locator
      //await page.getByText("sign up").click();
      
// getByPlaceholder, Xpath, CSS locators
         //await page.goto('https://www.youtube.com/@testerstalk');
         //await page.getByPlaceholder('Search').fill('testers by talk');
         //await page.locator('input[name="search_query"]').first().fill('testers by talk');
// get by title locator
        await page.goto('https://www.google.com/');
        await page.getByTitle('Search').fill('playwright by testers talk');         
});