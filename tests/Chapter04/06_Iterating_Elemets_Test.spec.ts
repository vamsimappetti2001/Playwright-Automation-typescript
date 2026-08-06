// import modules
import { test } from '@playwright/test'

// write a test code
test('print matching repository elements in playwright', async ({ page }) => {
    // go to url
    await page.goto('https://github.com/vamsimappetti20    01');
    await page.waitForSelector('main a.min-width-0.Link.text-bold.flex-auto.wb-break-all');

    const repositoryLinks = await page.$$('main a.min-width-0.Link.text-bold.flex-auto.wb-break-all');
    console.log(`Found ${repositoryLinks.length} matching repository elements:`);

    for (const repositoryLink of repositoryLinks) {
        const repoName = (await repositoryLink.textContent())?.trim() ?? '';
        console.log(`Repository name: ${repoName}`);
    }
})