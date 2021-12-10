export default class BasePage {

    async open(url) {
        await browser.url(url);
        //await this.waitUntilAvailable();
    }

    async waitForScreenAvalible() {
        await this.getBaseElement().waitForDisplayed();
        console.log('waitForScreenAvalible() ---OK!');
    }

    async waitUntilAvailable() {
        await browser.waitUntil(
            async () => {
                return !!this.getBaseElement().length;
            }, {
                timeout: 15000,
                timeoutMsg: 'Element not loaded.',
                interval: 5000
            }
        );
    }


}