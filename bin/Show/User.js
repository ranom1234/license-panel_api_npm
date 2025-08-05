const requestCreator = require('../Tools/requestCreator.js');

const showUser = async (key) => {
    return await requestCreator('/licenses/show/User', key, 'GET');
}

module.exports = showUser;