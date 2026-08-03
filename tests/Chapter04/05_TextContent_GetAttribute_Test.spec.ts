// import playwright module
import {test, expect} from '@playwright/test'

// write a test 
test('Get Attribute and  Text in playwright', async ({page}) => { 
    
// go to url
    await page.goto('https://github.com/vamsimappetti2001');

    //const name = await page.locator('[itemprop="additionalName"]').textContent();
    const name = await page.locator('[itemprop="additionalName"]').innerText();
    const finalName = name?.trim();
    console.log(`Name is : ${finalName}`);
    expect(finalName).toBe('vamsimappetti2001'); 
// Get Attribute values
    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-turbo-frame');
    console.log(`Attribute value is : ${attributeValue}`);
    

});