const requestCreator = require('../Tools/requestCreator.js');

const showKey = async (key, key_filter) => {
    return await requestCreator(`/licenses/filter/byKey/${key_filter}`, key, 'GET');
}

module.exports = showKey;