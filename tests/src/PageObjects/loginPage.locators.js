

class LoginPageLocators {
    constructor(page) {
      this.page = page;
      this.userName = page.locator('#user-name');
      this.password = page.locator('#password');
      this.loginButton = page.locator('#login-button');
      this.addToCartButton = page.locator("#add-to-cart-sauce-labs-backpack");
      this.cartBadge = page.locator("//span[@class='shopping_cart_badge']");
      this.checkoutButton = page.locator("#checkout");
      this.firstName = page.locator("#first-name")
      this.lastName = page.locator("#last-name");
      this.pinCode = page.locator("#postal-code");
      this.continue = page.locator("#continue");
      this.finish = page.locator("#finish");
      this.checkoutInfo = page.locator("#checkout_info_container");
      
      
    }
    
    productName(text){
      return this.page.getByText(text);
    }
    greetingsMessage(text){
      return this.page.getByText(text);
    }
  
  }
  
  export default LoginPageLocators;



