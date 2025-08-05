const requestCreator = require('../Tools/requestCreator.js');

const checkKey = async (key, key_check) => {
    return await requestCreator(`/licenses/check/key/${key_check}`, key, 'GET');
}

module.exports = checkKey;