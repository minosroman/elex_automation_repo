import BasePage from '../base/base.page.js';

class LoginPage extends BasePage {

    get email() {
        return $('#email');
    }
    get password() {
        return $('#password');
    }
    get btnLogin() {
        return $('button#loginButton');
    }
    get errorLoginMsg(){
        return $('div.error.ng-star-inserted');
    }

    async open() {
        await super.open('/login');
    }

    async login(email, pass) {
        await this.email.setValue(email);
        await this.password.setValue(pass);
        await this.btnLogin.click();
    }
}

export default new LoginPage();