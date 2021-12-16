import superagent from 'superagent';

class BaseAPI {

    async GET(url, requestBody, token) {
        console.log('Sending GET request to url:' + url);
        if (url && requestBody && token) {
            return await superagent.get(url).send(requestBody).set(token);
        } else if (url && token) {
            return await superagent.get(url).set(token);
        } else {
            return await superagent.get(url);
        }
    }

    async POST(url, data, token) {
        console.log('Sending POST request to url:' + url);
        return await superagent.post(url).send(data);
    }

    async PUT(url) {
        console.log('Sending PUT request to url:' + url);
        return await superagent.put(url);
    }

    async DELETE(url, token) {
        console.log('Sending DELETE request to url:' + url);
        return await superagent.delete(url).set(token);
    }

    async getSecurityQuestion(url) {
        console.log('Getting Security Question List');
        return await superagent.get(url);
    }

}

export default new BaseAPI();