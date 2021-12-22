import loginPage from '../pages/login.page.js';
import profilePage from '../pages/profile.page.js';
import mainPage from '../pages/main.page.js';

describe('Testing to update profile page (photo,username)', () => {
    it('try change user name', async () => {
        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        await mainPage.openAccountMenu();
        await mainPage.clickLogin();

        //Login Page
        loginPage.waitForScreenAvalible();
        await loginPage.login('qwerty@gmail.com', 'qwerty123');

        //Main Page
        mainPage.waitForScreenAvalible();
        await mainPage.openAccountMenu();
        await mainPage.profileBtn.waitForDisplayed();
        await mainPage.openProfile();

        //Profile Page
        profilePage.waitForScreenAvalible();
        await profilePage.changeUserName('Donald Trump');
        await profilePage.changeUserImage('http://localhost:3000/assets/public/images/products/apple_juice.jpg');

        //Check status
        await profilePage.profileImage.waitForDisplayed();
        await expect(await profilePage.profile).toHaveTextContaining('Donald Trump');
    });
});