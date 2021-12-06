import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';

describe('Testing login page', () => {
    it('try login with invalid credentials', async () => {
        
        //Main Page
        mainPage.open();
        mainPage.navigateToLogin();
        
        //Login Page
        loginPage.login('qwerty@gmail.com', 'qwerty1231');

        //Check login status
        await expect(loginPage.errorLoginMsg).toBeExisting();
        await expect(loginPage.errorLoginMsg).toHaveTextContaining('Invalid email or password.');

        //Delay
        //await browser.pause(5000);
    });

});