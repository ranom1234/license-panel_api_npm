const requestCreator = require('../Tools/requestCreator.js');

const key = async (key, data) => {
    return await requestCreator(`/licenses/create/keyLicense`, key, 'POST', data);
}

module.exports = key;