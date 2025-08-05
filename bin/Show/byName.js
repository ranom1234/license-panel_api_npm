const requestCreator = require('../Tools/requestCreator.js');

const showName = async (key, name) => {
    return await requestCreator(`/licenses/filter/byName/${name}`, key, 'GET');
}

module.exports = showName;