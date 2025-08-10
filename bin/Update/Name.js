const requestCreator = require('../Tools/requestCreator.js');

const name = async (key, name, data, method = 'PUT') => {
    method = method.toUpperCase();
    if(method !== "PUT" && method !== "PATCH") {
        method = "PUT";
    }
    return await requestCreator(`/licenses/update/name/${name}`, key, method, data);
}

module.exports = name;