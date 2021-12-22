import BasePage from '../base/base.page.js';
import InputElement from '../elements/input.element.js';
import ButtonElement from '../elements/button.element.js';

class ProfilePage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('.logo'), 'ProfilePageBase');
    }
    get username() {
        return new InputElement($('#username'));
    }
    get setUsernameBtn() {
        return new ButtonElement($('button#submit'), 'Set Username');
    }
    get imageUrl() {
        return new InputElement($('#url'));
    }
    get linkImageBtn() {
        return new ButtonElement($('button#submitUrl'), 'Link Image');
    }
    get profileImage() {
        return $('img[alt="profile picture"]');
    }
    get profile() {
        return $('#card > div > div:nth-child(2) > p');
    }
    
    async open() {
        await allure.addStep('Open Profile Page');
        await super.open('/profile');
        await allure.endStep('passed');
    }
    async changeUserName(username) {
        await allure.addStep(`Change Username`);
        await this.username.setValue(username);
        await this.setUsernameBtn.click();
        await allure.endStep('passed');
    }
    async changeUserImage(imageUrl) {
        await allure.addStep(`Change Image`);
        await this.imageUrl.setValue(imageUrl);
        await this.linkImageBtn.click();
        await allure.endStep('passed');
    }

    async changeProfile(username, imageUrl) {
        await allure.addStep(`Change User Image and Username`);
        await this.changeUserName(username);
        await this.changeUserImage(imageUrl);
        await allure.endStep('passed');
    }
}

export default new ProfilePage();