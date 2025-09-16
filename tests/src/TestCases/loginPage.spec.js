import { test, expect } from '@playwright/test';
import loginPage from '../PageObjects/loginPage.method';
import loginData from '../TestData/loginpage.json';


test('Login to the application', async ({ page }) => {
    const loginpage = new loginPage(page);
    await loginpage.login(loginData.sauceDemoUrl, loginData.sauceDemoUsername, loginData.sauceDemoPassword);
    await loginpage.verifyLogin();
});
test('Verify the complete flow of buying a product from the sauce lab application', async({page})=>{
    const loginpage = new loginPage(page);
    await loginpage.login(loginData.sauceDemoUrl, loginData.sauceDemoUsername, loginData.sauceDemoPassword);
    await loginpage.verifyLogin();
    await loginpage.addToCartFlow();
    await loginpage.checkoutFlow();
    await loginpage.fillingCheckoutInfo(loginData.firstName, loginData.lastName, loginData.pinCode)
})