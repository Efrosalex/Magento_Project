import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/Log In/loginpage';

test.describe("Login Page Tests", () => {


    let Login;

    test.beforeEach(async ({ page }) => {
        Login = new LoginPage(page)
        await Login.GoToHomepage()
    });
    test('Login Valid User', async ({ page }) => {
        await Login.GoToSignIn()
        await Login.SignIn("usaapps97@gmail.com", "Parola100!")
        const welcomeBanner = page.getByRole('banner').getByText('Welcome, Alexandru Efros!');
        await expect(welcomeBanner).toBeVisible(); // checks that it exists and is visible
        
    })
    test('Login Invalid User', async ({ page }) => {
        await Login.GoToSignIn()
        await Login.SignIn("usaap@gmail.com", "Parola100")
        const invalidEmail = page.getByText('The account sign-in was');
        await expect(invalidEmail).toBeVisible();
    })

});