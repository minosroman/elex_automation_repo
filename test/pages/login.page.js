import BasePage from '../base/base.page.js';
import InputElement from '../elements/input.element.js';
import ButtonElement from '../elements/button.element.js';

class LoginPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('//*[contains(text(), "Registration completed successfully. You can now log in.")]'), 'LoginPageBase');
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
        await allure.addStep('Open Login Page');
        await super.open('/login');
        await allure.endStep('passed');
    }
    async login(email, pass) {
        await allure.addStep(`Logging with email: ${await email}, password: ${await pass}`);
        await this.email.setValue(email);
        await this.password.setValue(pass);
        await this.btnLogin.click();
        await allure.endStep('passed');
    }
}

export default new LoginPage();