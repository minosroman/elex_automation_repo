import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';
import InputElement from '../elements/input.element.js';
import randomstring from 'randomstring';

class FeedbackPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('.logo'), 'AdressPageBase');
    }
    get snackBar() {
        return $('simple-snack-bar.mat-simple-snackbar.ng-star-inserted');
    }
    get comentArea() {
        return $('textarea[id="comment"]');
    }
    get slider() {
        return $('mat-slider[id="rating"]');
    }
    get captcha() {
        return $('code[id="captcha"]');
    }
    get captchaResult() {
        return new InputElement($('input[id="captchaControl"]'), 'Captcha Result');
    }
    get submitBtn() {
        return new ButtonElement($('button[id="submitButton"]'), 'Submit Button');
    }

    async open() {
        await allure.addStep('Open Customer Feedback page');
        await super.open('/contact');
        await allure.endStep('passed');
    }
    async giveCaptchaAnswr() {
        return Function('"use strict"; return (' + await this.captcha.getText() + ')')();
    }
    async leaveFeedback() {
        await allure.addStep('Leave Feedback');
        //await this.slider.getValue();

        await browser.touchAction([
            { action: 'press', x: 462.875, y: 359.5 },
            { action: 'moveTo', x: 526.875, y: 359.5 },
            'release'
        ]);
        await this.comentArea.setValue(randomstring.generate({length: 200, charset: 'alphanumeric'}));
        await this.captchaResult.setValue(await this.giveCaptchaAnswr());
        //await this.submitBtn.click();
        await allure.endStep('passed');
    }
    async checkStatus() {
        await allure.addStep('Check Status');
        if(await this.snackBar.isExisting() && await this.snackBar.isDisplayed()) return await this.snackBar;
        await allure.endStep('passed');
    }
}
export default new FeedbackPage();