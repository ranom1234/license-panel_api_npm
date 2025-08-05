const requestCreator = require('../Tools/requestCreator.js');

const showType = async (key, type) => {
    return await requestCreator(`/licenses/filter/byType/${type}`, key, 'GET');
}

module.exports = showType;