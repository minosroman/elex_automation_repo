import baseAPI from '../base/base.api.js';

describe('API Testing of Juice-shop', () => {
    let baseUrl = 'http://localhost:3000/';

    it('API registration of new User', async () => {
        let userEmail = 'qwerty667@gmail.com';
        let userPass = 'qwerty123';
        let respQuestion = await baseAPI.getSecurityQuestion(baseUrl + 'api/SecurityQuestions/');
        let requestBody = {
            'email': userEmail,
            'password': userPass,
            'passwordRepeat': userPass,
            'securityQuestion': JSON.stringify(respQuestion.body.data[Math.floor(Math.random() * 14) + 1]),
            'answer': userPass
        };
        let response = await baseAPI.POST(baseUrl + 'api/Users/', requestBody);
        console.log(`Register new User with data: ${userEmail}/${userPass}`);
        await expect(response.statusCode).toEqual(201);
    });
});