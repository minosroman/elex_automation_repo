import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';

describe('Adding items to the basket and completing purchase flow', () => {
    it('try to buy sold item', async () => {
        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        await mainPage.openAccountMenu();
        await mainPage.clickLogin();

        //Login Page
        loginPage.waitForScreenAvalible();
        await loginPage.login('qwerty@gmail.com', 'qwerty123');

        //Check status
        mainPage.waitForScreenAvalible();
        await mainPage.clickAddToBasketSoldItem();
        await expect(mainPage.soldMsg).toBeExisting();
        await expect(mainPage.soldMsg).toHaveTextContaining('We are out of stock!');
    });
});