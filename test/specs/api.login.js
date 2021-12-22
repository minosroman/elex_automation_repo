import baseAPI from '../base/base.api.js';

describe('API Testing of Juice-shop', () => {
    let baseUrl = 'http://localhost:3000/';
    let token = '';
    it('API login User', async () => {
        let userEmail = 'qwerty@gmail.com';
        let userPass = 'qwerty123';
        let requestBody = {
            'email': userEmail,
            'password': userPass
        };
        let response = await baseAPI.POST(baseUrl + 'rest/user/login', requestBody);
        console.log(`Login User with data: ${userEmail}/${userPass}`);
        token = await baseAPI.getToken(response);
        console.log(`User token: ${token}`);
        await expect(response.statusCode).toEqual(200);
    });
});