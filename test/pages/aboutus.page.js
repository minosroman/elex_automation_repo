import BasePage from '../base/base.page.js';

class AboutUsPage extends BasePage {

    get twitterBtn() {
        return $('div > a:nth-child(2) > button');
    }
    get twitterUrl() {
        return 'https://twitter.com/owasp_juiceshop';
    }
    get twitterMarker() {
        //return $('a[href="https://twitter.com/privacy"]');
        return $('a[data-testid="signup"]');
        
    }
    get facebookBtn() {
        return $('div > a:nth-child(3) > button');
    }
    get facebookUrl() {
        return 'https://www.facebook.com/owasp.juiceshop';
    }
    get facebookMarker() {
        return $('.fb_logo');
    }
    get slackBtn() {
        return $('div > a:nth-child(4) > button');
    }
    get redditBtn(){
        return $('div > a:nth-child(5) > button');
    }
    get pressKitBtn(){
        return $('div > a:nth-child(6) > button');
    }
    async open() {
        await super.open('/about');
    }

    async goTwitter() {
        await this.twitterBtn.scrollIntoView();
        await this.twitterBtn.click();
    }
    async goFacebook() {
        await this.twitterBtn.scrollIntoView();
        await this.facebookBtn.click();
    }
}

export default new AboutUsPage();