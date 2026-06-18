// import playwright module
import {test, expect } from '@playwright/test'

//write a test case
test('Keyboard actions in playwright', async({page}) =>{ 

// go to url
await page.goto('https://www.google.com/');

//eneter action from keyboard
await page.getByLabel('Search', {exact :true}).first().click();
await page.getByLabel('Search', {exact :true}).first().fill('Playwright by tester talk');
await page.getByLabel('Search', {exact :true}).first().press('Enter');

// selecting & deleting  from keyboard
await page.getByLabel('Search', {exact :true}).first().click();
await page.keyboard.press('Control+A');
await page.keyboard.press('Delete');

// Press and Enter
await page.getByLabel('Search',  {exact :true}).first().click();
await page.keyboard.press('Tab');
await page.keyboard.press('Enter');

});