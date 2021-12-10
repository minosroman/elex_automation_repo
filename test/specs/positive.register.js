import registerPage from '../pages/register.page.js';
import loginPage from '../pages/login.page.js';
import mainPage from '../pages/main.page.js';

describe('Testing register page', () => {
    it('try register new User', async () => {

        //Main Page
        mainPage.open('/');
        mainPage.waitForScreenAvalible();
        mainPage.navigateToLogin();

        //Login Page
        loginPage.registerUser.click();

        //Register Page
        //registerPage.selectDropdown("Mother's maiden name?");
        registerPage.registerForm('qwerty0@gmail.com', 'qwerty123', 'qwerty123', "Mother's maiden name?", 'qwerty');


        //Check register status
        //await loginPage.waitUntilAvailable();
        //await expect(await loginPage.rgstrStatusOk).toBeExisting();
        //await expect(await loginPage.rgstrStatusOk).toHaveTextContaining('Registration completed successfully. You can now log in.');

        //Delay
        await browser.pause(15000);
    });

});