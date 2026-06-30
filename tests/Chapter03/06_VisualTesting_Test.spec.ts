//import playwright module
import{test, expect} from '@playwright/test'

//write a test case
test('Visual Comparison in playwright', async ({page}) =>{
    // go to url
    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
    
    await page.locator('#login_field').fill('Playright with typescript')

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
});

//write a test case
test('Element Visual Comparison in playwright', async ({page}) =>{
    // go to url
    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]');

    await expect(element).toHaveScreenshot('GitHubLoginPageForm.png');

    await page.locator('#login_field').fill('Playright with typescript')
    await expect(element).toHaveScreenshot('GitHubLoginPageForm.png');

    
});


