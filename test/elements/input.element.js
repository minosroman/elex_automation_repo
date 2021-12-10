import BaseElement from '../base/base.element.js';

export default class InputElement extends BaseElement {
    
    async setValue(value) {
        await this.wdioElement.setValue(value);
    }

}
