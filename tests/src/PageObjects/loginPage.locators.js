

class LoginPageLocators {
    constructor(page) {
      this.page = page;
      this.userName = page.locator('#user-name');
      this.password = page.locator('#password');
      this.loginButton = page.locator('#login-button');
    }
  }
  
  export default LoginPageLocators;



