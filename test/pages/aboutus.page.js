import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class AboutUsPage extends BasePage {

    get twitterBtn() {
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Twitter")]'), 'Go Twitter');
    }
    get twitterUrl() {
        return 'https://twitter.com/owasp_juiceshop';
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
    get redditBtn(){
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Reddit")]'), 'Go Reddit');
    }
    get redditUrl() {
        return 'https://www.reddit.com/r/owasp_juiceshop/';
    }
    get redditMarker() {
        return $('input[id="header-search-bar"]');
    }
    get pressKitBtn(){
        return new ButtonElement($('//*[@class="mat-button-wrapper"][contains(text(), "Press Kit")]'), 'Go PressKit');
    }
    get pressKitUrl() {
        return 'https://github.com/OWASP/owasp-swag/tree/master/projects/juice-shop';
    }
    get pressKitMarker() {
        return $('.commit-author.user-mention');
    }
    async open() {
        await super.open('/about');
    }

    async goTwitter() {
        await this.twitterBtn.click();
    }
    async goFacebook() {
        await this.facebookBtn.click();
    }
    async goSlack() {
        await this.slackBtn.click();
    }
    async goReddit() {
        await this.redditBtn.click();
    }
    async goPressKit() {
        await this.pressKitBtn.click();
    }
}

export default new AboutUsPage();