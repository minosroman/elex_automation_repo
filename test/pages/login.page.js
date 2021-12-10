import BasePage from '../base/base.page.js';
import InputElement from '../elements/input.element.js';
import ButtonElement from '../elements/button.element.js';

class LoginPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('button#loginButton'), 'LoginPageBase');
    }

    get email() {
        return new InputElement($('#email'));
    }
    get password() {
        return new InputElement($('#password'));
    }
    get btnLogin() {
        return new ButtonElement($('button#loginButton'), 'Log In');
    }
    get errorLoginMsg() {
        return $('div.error.ng-star-inserted');
    }
    get registerUser() {
        return new ButtonElement($('a[routerlink="/register"]'), 'Not yet a customer?');
    }
    get rgstrStatusOk() {
        return $('//*[contains(text(), "Registration completed successfully. You can now log in.")]');
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