import BaseElement from '../base/base.element.js';
import ButtonElement from './button.element.js';

export default class DropdownElement extends BaseElement{
    async open(){
        await this.wdioElement.click();
    }
    async select(option){
        await this.open();
        await new ButtonElement($(`//*[@class="mat-option-text"][contains(text(), "${option}")]`), 'Dropdown Button').click();
    }

}
