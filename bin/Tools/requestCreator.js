const env = require('../../env');

const requestCreator = async (endpoint, apiKey, method, data = null) => {
    try {
        return await fetch(env.API_POINT + endpoint, {
            method,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            ...(data ? {body: JSON.stringify(data)} : {})
        }).then(res => res.json());
    }
    catch (error) {
        throw new Error(`API Error ${response.status}: ${response.statusText}`);
    }
}

module.exports = requestCreator;