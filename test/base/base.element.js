export default class BaseElement {
    constructor(wdioElement, name) {
        this.wdioElement = wdioElement;
        this.elementName = name;
    }
    async click() {
        await this.wdioElement.click();
        console.log(`Click on element "${this.elementName}"`);
    }
    async isExisting() {
        console.log(`isExisting() ---OK! (${this.elementName})`);
        return await this.wdioElement.isExisting();

    }
    async isDisplayed() {
        console.log(`isDisplayed() ---OK! (${this.elementName})`);
        return await this.wdioElement.isDisplayed();
    }
    async waitForDisplayed() {
        console.log(`waitForDisplayed() ---OK! (${this.elementName})`);
        return await this.wdioElement.waitForDisplayed();

    }
}