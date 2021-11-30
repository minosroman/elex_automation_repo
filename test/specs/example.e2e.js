describe('My Login application', () => {
    before(() => {
        console.error(`Testing in pocess... (${browser.capabilities.browserName})`);
    });
    it('should login with valid credentials', async () => {
        await browser.setWindowSize(1366, 768);
        await browser.url('/login');
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
    after(() => {
        console.log(`Testing is done! (${browser.capabilities.browserName})`);
    });
});