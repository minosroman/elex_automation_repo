import aboutusPage from '../pages/aboutus.page.js';
import mainPage from '../pages/main.page.js';

describe('Opening social media from “About Us” page', () => {
    it('try to open facebook page', async () => {
        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        mainPage.openAboutUsPage();

        //About Page
        aboutusPage.waitForScreenAvalible();
        await aboutusPage.goFacebook();
        await browser.switchWindow(aboutusPage.facebookUrl);

        //Check status
        await aboutusPage.facebookMarker.waitForDisplayed();
        await expect(aboutusPage.facebookMarker).toBeExisting();
    });
});