// import playwright module
import {test, expect} from '@playwright/test'
//write a test case
test('Mouse Actions In Playwright',  async ({ page}) =>{
// go to url
await page.goto('https://www.google.com/search?q=playwright+by+testers+talk'); 

// left button click
await page.getByRole('link',{name :'Playwright by Testers Talk'}).first().click({ button :'left' })

// middle button click
await page.getByRole('link',{name :'Playwright by Testers Talk'}).first().click({ button :'middle' })

// Right button click
await page.getByRole('link',{name :'Playwright by Testers Talk'}).first().click({ button :'right' })

// check  Mouse Hover is working or not 
await page.getByLabel('Search by voice').hover();

//Doubleclick on the Element
await page.getByLabel('Search by voice').dblclick ();
});