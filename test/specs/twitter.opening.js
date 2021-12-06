import aboutusPage from '../pages/aboutus.page.js';
import mainPage from '../pages/main.page.js';

describe('Test for the opening social media', () => {
    it('try to open twitter page', async () => {

        //Main Page
        mainPage.open();
        mainPage.showSideMenu();

        // //About Page
        await aboutusPage.goTwitter();
        await browser.switchWindow(aboutusPage.twitterUrl);


        //Check opening Twitter status
        await expect(aboutusPage.twitterMarker).toBeExisting();

        //Delay
        //await browser.pause(10000);
    });

});