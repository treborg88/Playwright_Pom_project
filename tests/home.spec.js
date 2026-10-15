const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test.describe('Home', () => {
    test('Playwright home page search bar action', async ({ page }) => {
        const home = new HomePage(page);

        await home.openBrowser();

        await expect(home.searchBar).toBeVisible();
        await home.clickSearchBar();
        await expect(home.searchBarField).toBeVisible();

        await home.typeOnSearchBar('installation');
        await expect(home.searchBarField).toHaveValue('installation');

        await home.clickClearQuery();
        await expect(home.searchBarField).toHaveValue('');
    });
});