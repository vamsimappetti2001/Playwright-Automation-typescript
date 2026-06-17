// import playwright module
import {test, expect} from '@playwright/test'
//write a test case
test('', async ({ page}) =>{
// go to url
await page.goto('https://jqueryui.com/droppable/'); 
const iframe = page.frameLocator('[class="demo-frame"]'); 
// drag element, drop element
const dragElement = iframe.locator('[id="draggable"]')
const dropElement = iframe.locator('[id="droppable"]')

await dragElement.dragTo(dropElement);  

});