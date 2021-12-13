import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';
import randomString from 'randomstring';

describe('Testing login page', () => {
    it('try login with invalid credentials', async () => {
        
        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        await mainPage.openAccountMenu();
        await mainPage.clickLogin();
        
        //Login Page
        loginPage.login(`${randomString.generate(5)}@gmail.com`, randomString.generate(8));

        //Check login status
        loginPage.waitForScreenAvalible();
        await expect(loginPage.errorLoginMsg).toBeExisting();
        await expect(loginPage.errorLoginMsg).toHaveTextContaining('Invalid email or password.');

        //Delay
        //await browser.pause(5000);
    });

});