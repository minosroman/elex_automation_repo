import BaseElement from '../base/base.element.js';
import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class AboutUsPage extends BasePage {

    async getBaseElement() {
        return new BaseElement($('.social ng-star-inserted'), 'AboutUsPageBase');
    }
    get twitterBtn() {
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Twitter")]'), 'Go Twitter');
    }
    get twitterUrl() {
        return 'https://twitter.com/owasp_juiceshop';
    }
    get twitterTitle() {
        return 'OWASP Juice Shop (@owasp_juiceshop) / Твіттер';
    }
    get twitterMarker() {
        return $('a[data-testid="signup"]');
    }
    get facebookBtn() {
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Facebook")]'), 'Go Facebook');
    }
    get facebookUrl() {
        return 'https://www.facebook.com/owasp.juiceshop';
    }
    get facebookTitle() {
        return 'OWASP Juice Shop - Головна | Facebook';
    }
    get facebookMarker() {
        return $('.fb_logo');
    }
    get slackBtn() {
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Slack")]'), 'Go Slack');
    }
    get slackUrl() {
        return 'https://owasp.org/slack/invite';
    }
    get slackMarker() {
        return $('img[alt="OWASP logo"]');
    }
    get redditBtn() {
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Reddit")]'), 'Go Reddit');
    }
    get redditUrl() {
        return 'https://www.reddit.com/r/owasp_juiceshop/';
    }
    get redditMarker() {
        return $('input[id="header-search-bar"]');
    }
    get pressKitBtn() {
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Press Kit")]'), 'Go PressKit');
    }
    get pressKitUrl() {
        return 'https://github.com/OWASP/owasp-swag/tree/master/projects/juice-shop';
    }
    get pressKitMarker() {
        return $('.commit-author.user-mention');
    }
    async open() {
        await allure.addStep('Open About Us Page');
        await super.open('/about');
        await allure.endStep('passed');
    }
    async goTwitter() {
        await allure.addStep('Go on Twitter OWASP Juice Shop Page(open in a new tab)');
        await this.twitterBtn.click();
        await allure.endStep('passed');
    }
    async goFacebook() {
        await allure.addStep('Go on Facebook OWASP Juice Shop Page(open in a new tab)');
        await this.facebookBtn.click();
        await allure.endStep('passed');
    }
    async goSlack() {
        await allure.addStep('Go on Slack OWASP Juice Shop Page(open in a new tab)');
        await this.slackBtn.click();
        await allure.endStep('passed');
    }
    async goReddit() {
        await allure.addStep('Go on Reddit OWASP Juice Shop Page(open in a new tab)');
        await this.redditBtn.click();
        await allure.endStep('passed');
    }
    async goPressKit() {
        await allure.addStep('Go on Github OWASP Juice Shop Press Kit Page(open in a new tab)');
        await this.pressKitBtn.click();
        await allure.endStep('passed');
    }
}

export default new AboutUsPage();