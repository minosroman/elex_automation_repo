import baseAPI from '../base/base.api.js';

describe('API Testing of Juice-shop', () => {
    let baseUrl = 'http://localhost:3000/';
    let token = '';
    it('API login User & Add Item to Basket', async () => {
        let loginRspns = await baseAPI.POST(baseUrl + 'rest/user/login', {'email': 'qwerty@gmail.com','password': 'qwerty123'});
        await expect(loginRspns.statusCode).toEqual(200);
        let token = await baseAPI.getToken(loginRspns);
        console.log(token);

        let requestBody = {"ProductId":Math.floor(Math.random() *(26-13)) + 13,"BasketId":"6","quantity":2};
        let response = await baseAPI.POST(baseUrl + 'api/BasketItems/', requestBody, token);
        await expect(response.statusCode).toEqual(200);

    });
});