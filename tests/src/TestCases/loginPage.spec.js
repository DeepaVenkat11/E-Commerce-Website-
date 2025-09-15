import { test, expect } from '@playwright/test';
import loginPage from '../PageObjects/loginPage.method';
import loginData from '../TestData/loginpage.json';


test('Login to the application', async ({ page }) => {
    const loginpage = new loginPage(page);
    await loginpage.login(loginData.sauceDemoUrl, loginData.sauceDemoUsername, loginData.sauceDemoPassword);
    await loginpage.verifyLogin();
});