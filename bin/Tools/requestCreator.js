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
        return {success: false, message: error, status: 500, data: null};
    }
}

module.exports = requestCreator;