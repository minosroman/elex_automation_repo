export default class BasePage {

    async open(url) {
        await browser.url(url);
    }
    async waitForScreenAvalible() {
        await this.getBaseElement().waitForDisplayed();
        console.log('waitForScreenAvalible() ---OK!');
    }

    // async waitUntilAvailable() {
    //     await browser.waitUntil(
    //         async () => {
    //             return this.getBaseElement().element;
    //         }, {
    //             timeout: 15000,
    //             timeoutMsg: 'Element not loaded.',
    //             interval: 1000
    //         }
    //     );
    // }
    
}