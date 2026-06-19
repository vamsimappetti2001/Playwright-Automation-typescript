// import playwright module
import {test, expect } from '@playwright/test'
       
//write a test case
 test('Selecting DateValue in Playwright', async({page}) =>{ 

// go to url
 await page.goto('https://jqueryui.com/datepicker/');

// Hardcoded date
 const iframe = page.frameLocator('[class="demo-frame"]');
 await iframe.locator('[id="datepicker"]').fill('20/12/2016');

//Selecting Dynamic Date
 await iframe.locator('[id="datepicker"]').click();
 await iframe.locator('.ui-datepicker-today').click();

//Selecting Past Date
 await iframe.locator('[id="datepicker"]').click();
 await iframe.locator('[title="Prev"]').click();
 await iframe.locator('text="15"').click();

//Selecting Future Date
 await iframe.locator('[id="datepicker"]').click();
 await iframe.locator('[title="Next"]').click();
 await iframe.locator('text="15"').click();

});