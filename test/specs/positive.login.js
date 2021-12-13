import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';

describe('Testing login page', () => {
    it('try login with valid credentials', async () => {
        
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
        await mainPage.openAccountMenu();
        await expect(mainPage.checkLoginStatus()).toBeExisting();

        //Delay
        //await browser.pause(10000);
    });

});