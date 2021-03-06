import BasePage from '../base/base.page.js';
import InputElement from '../elements/input.element.js';
import ButtonElement from '../elements/button.element.js';
import DropdownElement from '../elements/dropdown.element.js';
import randomstring from 'randomstring';

class RegisterPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('#button#registerButton'), 'RegisterPageBase');
    }
    get email() {
        return new InputElement($('#emailControl'));
    }
    get password() {
        return new InputElement($('#passwordControl'));
    }
    get repeatPassword() {
        return new InputElement($('#repeatPasswordControl'));
    }
    get dropdown() {
        return new DropdownElement($('[name="securityQuestion"]'), 'Security Question');
    }
    get answer() {
        return new InputElement($('#securityAnswerControl'));
    }
    get btnRegister() {
        return new ButtonElement($('button#registerButton'), 'Register');
    }
    get errorLoginMsg() {
        return $('div.error.ng-star-inserted');
    }
    get rgstrStatusOk() {
        return $('//*[contains(text(), "Registration completed successfully. You can now log in.")]');
    }
    async open() {
        await allure.addStep('Open Register Page');
        await super.open('/register');
        await allure.endStep('passed');
    }
    async genData(lngth){
        return randomstring.generate({length: lngth, charset: 'alphabetic'});
    }
    async registerForm(email, pass, rePass, dropdown, answer) {
        await allure.addStep('Fill register fields and click Register Button');
        await this.email.setValue(email);
        await this.password.setValue(pass);
        await this.repeatPassword.setValue(rePass);
        await this.dropdown.select(dropdown);
        await this.answer.setValue(answer);
        await this.btnRegister.click();
        await allure.endStep('passed');
    }
}

export default new RegisterPage();