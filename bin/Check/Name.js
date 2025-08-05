const requestCreator = require('../Tools/requestCreator.js');

const checkName = async (key, name) => {
    return await requestCreator(`/licenses/check/name/${name}`, key, 'GET');
}

module.exports = checkName;