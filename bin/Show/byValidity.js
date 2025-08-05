const requestCreator = require('../Tools/requestCreator.js');

const showValidity = async (key, validity) => {
    return await requestCreator(`/licenses/filter/byValidity/${validity}`, key, 'GET');
}

module.exports = showValidity;