exports.HomePage = class HomePage {
    constructor(page) {

        //Navigation

        this.page = page
        this.homepage_url = 'https://magento2demo.firebearstudio.com/'
        this.homepage_button = page.getByRole('link', { name: 'store logo' })
        this.homepage_whats_new_button = page.getByRole('menuitem', { name: 'What\'s New' })
        this.homepage_women_category_button = page.getByRole('menuitem', { name: ' Women' })
        this.homepage_men_category_button = page.getByRole('menuitem', { name: ' Men' })

        //Search Bar

        this.search_bar_text = page.getByRole('combobox', { name: ' Search' })
        //await page.getByRole('heading', { name: 'Search results for: \'pants\'' }).locator('span').click();
    }

    async GoToHomepage()
    {
        await this.page.goto(this.homepage_url)
    }
    async TypeInSearchBar(string)
    {
        await this.search_bar_text.click()
        await this.search_bar_text.fill(string)
        await this.page.getByRole('combobox', { name: ' Search' }).press('Enter');
    }

}