const requestCreator = require('../Tools/requestCreator.js');

const key = async (key, key_update, data) => {
    return await requestCreator(`/licenses/update/name/${key_update}`, key, 'PUT', data);
}

module.exports = key;