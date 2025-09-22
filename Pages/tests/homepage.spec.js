import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Homepage/homepage';

test.describe("Home Page Tests", () => {


    let Home;

    test.beforeEach(async ({ page }) => {
        Home = new HomePage(page)
        await Home.GoToHomepage()
    });
    test('Homepage loads successfully MDP-9', async ({ page }) => {
        await expect(Home.page).toHaveTitle("Home Page")
    })
    test('Navigation (Men/ Women/ Whats New/ Home MDP-10)', async ({ page }) => {

        await Home.homepage_men_category_button.click()
        await expect(Home.page).toHaveURL("https://magento2demo.firebearstudio.com/men.html")
        await Home.homepage_whats_new_button.click()
        await expect(Home.page).toHaveTitle("What's New")
        await Home.homepage_women_category_button.click()
        await expect(Home.page).toHaveTitle("Women")
        await Home.homepage_button.click()
        await expect(Home.page).toHaveTitle("Home Page")
    });
    test('Search Bar returns correct products MDP-11', async ({ page }) => {

        await Home.TypeInSearchBar("pants")
        const searchHeadingSpan = page.getByRole('heading', { name: "Search results for: 'pants'" }).locator('span');
        await expect(searchHeadingSpan).toBeVisible();
    });
});
