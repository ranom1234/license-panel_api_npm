const requestCreator = require('../Tools/requestCreator.js');

const showAll = async (key) => {
    return await requestCreator('/licenses/show/All', key, 'GET');
}

module.exports = showAll;