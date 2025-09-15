import { expect } from '@playwright/test';
import LoginPageLocators from './loginPage.locators';
class loginPage {
    constructor(page) {
        this.page = page;
        this.locators = new LoginPageLocators(page); 
    }
    async login(url, username, password) {
        await this.page.goto(url);
        await this.locators.userName.fill(username);     
        await this.locators.password.fill(password);
        await this.locators.loginButton.click()  
    }
    async verifyLogin() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');

    }
}

export default loginPage;