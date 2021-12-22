export default class BasePage {

    async open(url) {
        await browser.url(url);
    }
    async waitForScreenAvalible() {
        await this.getBaseElement().waitForDisplayed();
        console.log('waitForScreenAvalible() ---OK!');
    }
}