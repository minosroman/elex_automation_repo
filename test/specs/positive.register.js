import registerPage from '../pages/register.page.js';
import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';

describe('Testing register page', () => {
    it('try register new User', async () => {

        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        await mainPage.openAccountMenu();
        await mainPage.clickLogin();

        //Login Page
        loginPage.waitForScreenAvalible();

        await loginPage.registerUser.click();

        //Register Page
        registerPage.waitForScreenAvalible();
        await registerPage.registerForm('qwerty1@gmail.com', 'qwerty123', 'qwerty123', "Mother's maiden name?", 'qwerty');
       
        //Check register status
        loginPage.waitForScreenAvalible();
        await expect(loginPage.rgstrStatusOk).toBeExisting();
        await expect(loginPage.rgstrStatusOk).toHaveTextContaining('Registration completed successfully. You can now log in.');

        //Delay
        //await browser.pause(10000);
    });

});