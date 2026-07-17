//import playwright modulles 
import {test, expect} from '@playwright/test'

// Write a test case 
test('handling Alerts popups in playwright', async ({page}) => {
    // go to url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    page.once('dialog', dialog =>{
        console.log(`Alert Type   : ${dialog.type()}`);
        dialog.accept();
        console.log(`Alert message is : ${dialog.message()}`);
        
    })

    await page.getByText('See an example alert', {exact : true}).click();
     
})

// Write a test case 
test('handling  popups in playwright', async ({page}) => {
    // go to url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    page.once('dialog', dialog =>{
        console.log(`Alert Type: ${dialog.type()}`);
        dialog.accept();
        console.log(`Alert message is : ${dialog.message()}`);
        
    })

    await page.getByText('See a sample confirm', {exact : true}).click();
     
})



// Write a test case 
test('handling  Prompt popups in playwright', async ({page}) => {
    // go to url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    page.once('dialog', async(dialog) =>{
        console.log(`Alert Type : ${dialog.type()}`);
        console.log(`Alert message is : ${dialog.message()}`);
        await dialog.accept('Playwright');
        
    })

    await page.getByText('See a sample prompt', {exact : true}).click();
     
})
     
