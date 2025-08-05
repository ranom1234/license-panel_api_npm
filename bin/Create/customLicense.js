const requestCreator = require('../Tools/requestCreator.js');

const custom = async (key, data) => {
    return await requestCreator(`/licenses/create/customLicense`, key, 'POST', data);
}

module.exports = custom;