import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';

describe('Testing login page', () => {
    it('try login with valid credentials', async () => {
        
        //Main Page
        mainPage.open();
        mainPage.navigateToLogin();
        
        //Login Page
        loginPage.login('qwerty@gmail.com', 'qwerty123');

        //Check login status
        await expect(mainPage.checkLoginStatus()).toBeExisting();

        //Delay
        //await browser.pause(2000);
    });

});