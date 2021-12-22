import adressCreate from '../pages/adress.create.js';
import adressSelect from '../pages/adress.select.js';
import basketPage from '../pages/basket.page.js';
import deliveryPage from '../pages/delivery.page.js';
import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';
import paymentPage from '../pages/payment.page.js';
import orderSummary from '../pages/order.page.js';

describe('Adding items to the basket and completing purchase flow', () => {
    it('try to buy some item', async () => {
        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        await mainPage.openAccountMenu();
        await mainPage.clickLogin();

        //Login Page
        loginPage.waitForScreenAvalible();
        await loginPage.login('qwerty@gmail.com', 'qwerty123');

        //Check login status
        mainPage.waitForScreenAvalible();
        await mainPage.clickAddToBasket();
        await mainPage.clickOpenBasket();

        //Basket Page
        basketPage.waitForScreenAvalible();
        await basketPage.clickChekout();

        //Adress Page
        adressSelect.waitForScreenAvalible();
        await adressSelect.clickAddNew();

        //Add New Address Page
        adressCreate.waitForScreenAvalible();
        await adressCreate.addNewAddress();

        //Adress Page
        adressSelect.waitForScreenAvalible();
        await adressSelect.clickContinue();

        //Delivery Page
        deliveryPage.waitForScreenAvalible();
        await deliveryPage.clickContinue();

        //Payment Page
        paymentPage.waitForScreenAvalible();
        await paymentPage.addCard();
        await paymentPage.clickContinue();

        //Order Summary Page
        orderSummary.waitForScreenAvalible();
        await orderSummary.clickCheckout();

        //Check status
        await expect(browser).toHaveUrlContaining('order-completion');
    });
});