const requestCreator = require('../Tools/requestCreator.js');

const key = async (key, key_update, data, method = 'PUT') => {
    method = method.toUpperCase();
    if(method !== "PUT" && method !== "PATCH") {
        method = "PUT";
    }
    return await requestCreator(`/licenses/update/name/${key_update}`, key, method, data);
}

module.exports = key;