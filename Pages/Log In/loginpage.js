exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.homepage_url = 'https://magento2demo.firebearstudio.com/'
        this.sign_in_page_button = page.getByRole('link', { name: 'Sign In' })

        this.email_textbox = page.getByRole('textbox', { name: 'Email*' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password* Password' })
        this.sign_in_button = page.getByRole('button', { name: 'Sign In' })
    }
    async GoToHomepage() {
        await this.page.goto(this.homepage_url)
    }
    async GoToSignIn() {
        await this.sign_in_page_button.click()
    }

    async SignIn(email, password) {
        await this.email_textbox.click()
        await this.email_textbox.fill(email)
        await this.password_textbox.click()
        await this.password_textbox.fill(password)
        await this.sign_in_button.click()
    }
}