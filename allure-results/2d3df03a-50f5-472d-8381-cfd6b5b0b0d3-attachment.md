# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter01\02_First_Test.spec.ts >> My First Playwright TypeScript Test
- Location: tests\Chapter01\02_First_Test.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.google.com/
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | // import playwright module
  2  | import {test, expect} from '@playwright/test'
  3  | 
  4  | // write a test 
  5  | test('My First Playwright TypeScript Test', async ({page}) => { 
  6  |     
  7  | // go to url
> 8  |     await page.goto('https://www.google.com/');
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.google.com/
  9  | 
  10 | // search for a keywords
  11 |     await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  12 |     await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  13 | 
  14 | // click on the playlists
  15 |     await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click()
  16 |    
  17 | //Validate web page title
  18 |    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
  19 | 
  20 | });
```