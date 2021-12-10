import BasePage from '../base/base.page.js';
import InputElement from '../elements/input.element.js';
import ButtonElement from '../elements/button.element.js';
import DropdownElement from '../elements/dropdown.element.js';

class RegisterPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('#button#registerButton'), 'RegisterButtonBase');
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

    async open() {
        await super.open('/register');
    }
    // async selectDropdown(text) {
    //     await this.dropdown.select(text);
    // }
    async registerForm(email, pass, rePass, dropdown, answer) {
        await this.email.setValue(email);
        await this.password.setValue(pass);
        await this.repeatPassword.setValue(rePass);
        await this.dropdown.select(dropdown);
        await this.answer.setValue(answer);
        await this.btnRegister.click();
    }
}

export default new RegisterPage();