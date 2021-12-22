import superagent from 'superagent';

class BaseAPI {

    async GET(url, requestBody, token) {
        console.log('Sending GET request to url:' + url);
        return await superagent.get(url).send(requestBody).set("Authorization", `Bearer ${token}`).catch(console.error);
    }

    async POST(url, data, token) {
        console.log('Sending POST request to url:' + url);
        return await superagent.post(url).send(data).set("Authorization", `Bearer ${token}`);
    }

    async PUT(url) {
        console.log('Sending PUT request to url:' + url);
        return await superagent.put(url);
    }

    async DELETE(url, token) {
        console.log('Sending DELETE request to url:' + url);
        return await superagent.delete(url).set("Authorization", `Bearer ${token}`);
    }

    async getSecurityQuestion(url) {
        console.log('Getting Security Question List');
        return await superagent.get(url);
    }

    async getToken(response) {
        console.log('Getting User Token');
        return JSON.parse(await JSON.stringify(response.body.authentication.token));
    }
}

export default new BaseAPI();