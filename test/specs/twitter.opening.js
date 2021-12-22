import aboutusPage from '../pages/aboutus.page.js';
import mainPage from '../pages/main.page.js';

describe('Opening social media from “About Us” page', () => {
    it('try to open twitter page', async () => {
        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        mainPage.openAboutUsPage();

        //About Page
        aboutusPage.waitForScreenAvalible();
        await aboutusPage.goTwitter();
        await browser.switchWindow(aboutusPage.twitterUrl);

        //Check status
        await aboutusPage.twitterMarker.waitForDisplayed();
        await expect(aboutusPage.twitterMarker).toBeExisting();
    });
});