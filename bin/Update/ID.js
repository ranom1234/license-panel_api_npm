const requestCreator = require('../Tools/requestCreator.js');

const id = async (key, id, data, method = 'PUT') => {
    method = method.toUpperCase();
    if(method !== "PUT" && method !== "PATCH") {
        method = "PUT";
    }
    console.log(method);
    return await requestCreator(`/licenses/update/id/${id}`, key, method, data);
}

module.exports = id;