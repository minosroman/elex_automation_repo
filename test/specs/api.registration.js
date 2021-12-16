import baseAPI from '../base/base.api.js';
import randomstring from 'randomstring';

describe('API Testing of Juice-shop', () => {
    let baseUrl = 'http://localhost:3000/';

    it('API registration of new User', async () => {
        //let rndmEmail = randomstring.generate({ length: 5, charset: 'alphabetic' }) + "@gmail.com";
        let rndmEmail = 'qwerty@gmail.com';
        //let rndmPass = randomstring.generate({ length: 8, charset: 'alphabetic' });
        let rndmPass = 'qwerty123';
        let respQuestion = await baseAPI.getSecurityQuestion(baseUrl + 'api/SecurityQuestions/');
        let requestBody = {
            'email': rndmEmail,
            'password': rndmPass,
            'passwordRepeat': rndmPass,
            'securityQuestion': JSON.stringify(respQuestion.body.data[Math.floor(Math.random() * 14) + 1]),
            'answer': rndmPass
        };
        let response = await baseAPI.POST(baseUrl + 'api/Users/', requestBody);
        console.log(`Register new User with data: ${rndmEmail}/${rndmPass}`);
        await expect(response.statusCode).toEqual(201);
    });
});