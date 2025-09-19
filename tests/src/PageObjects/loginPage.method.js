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
    async addToCartFlow(){
        await expect(this.locators.productName("Sauce Labs Backpack")).toBeVisible();
        await this.locators.addToCartButton.click();
        await expect(this.locators.cartBadge).toBeVisible();
        await this.locators.cartBadge.click();
        await expect(this.locators.productName("Sauce Labs Backpack")).toBeVisible();
        await expect(this.locators.checkoutButton).toBeEnabled();
        
    }
    async checkoutFlow(){
        await this.locators.checkoutButton.click();
        await expect(this.locators.checkoutInfo).toBeVisible();
    }
     async fillingCheckoutInfo(firstName,lastName,pinCode){
        
        await this.locators.firstName.fill(firstName);
        await this.locators.lastName.fill(lastName);
        await this.locators.pinCode.fill(pinCode);
        await expect(this.locators.continue).toBeEnabled();
        await this.locators.continue.click();
        await expect(this.locators.productName("Sauce Labs Backpack")).toBeVisible();
        await this.locators.finish.click();
        await expect(this.locators.greetingsMessage("Thank you for your order!")).toBeVisible();
     }
     async continueShopping(){
        await this.locators.continueShoppingBtn.click();
     }
     async removeProductFromListingPage(){
       await this.locators.removeProduct.click();
     }
     async verifyProduct(status){
        if(status=="Visible"){
            await expect(this.locators.productName("Sauce Labs Backpack")).toBeVisible();
        }
        else{
            await expect(this.locators.productName("Sauce Labs Backpack")).not.toBeVisible();
        }

     }

}

export default loginPage;