import aboutusPage from '../pages/aboutus.page.js';
import mainPage from '../pages/main.page.js';

describe('Test for the opening social media', () => {
    it('try to open facebook page', async () => {

        //Main Page
        await mainPage.open('/');
        mainPage.waitForScreenAvalible();
        mainPage.openAboutUsPage();

        //About Page
        aboutusPage.waitForScreenAvalible();
        await aboutusPage.goFacebook();
        await browser.switchWindow(aboutusPage.facebookUrl);

        //Check opening Facebook status
        await expect(aboutusPage.facebookMarker).toBeExisting();

        //Delay
        //await browser.pause(10000);
    });
});