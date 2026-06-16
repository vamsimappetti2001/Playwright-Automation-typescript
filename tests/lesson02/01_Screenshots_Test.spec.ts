// import playwright modules
import {test, expect} from '@playwright/test'

//write a test case
test('Take a screenshot in playwright', async({ page }) => {

// navigate to url
await page.goto('https://www.youtube.com/@testerstalk');

//Element screenshot
await page.locator('#page-header-container').screenshot({path:'./Screenshots/ElementScreenshot.png'})

// Page screen shot
await page.screenshot({path:'./Screenshots/pageScreenshot.png'})

//Full page  screen shot
await page.screenshot({path:'./Screenshots/fullpageScreenshot.png', fullPage:true})
})