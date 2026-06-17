import { test, expect } from '@playwright/test';

test('Handling Dropdown List in Playwright', async ({ page }) => {
  // Use a demo site with dropdowns instead of Facebook (which blocks automation)
  await page.goto('https://demoqa.com/select-menu');

  // Select dropdown by value
  const selectDropdown = page.locator('select').first();
  await selectDropdown.selectOption('3');

  // Verify selection
  await expect(selectDropdown).toHaveValue('3');

  // Select by another value
  await selectDropdown.selectOption('5');

  // Verify final selection
  await expect(selectDropdown).toHaveValue('5');
});
