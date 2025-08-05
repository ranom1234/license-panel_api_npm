const requestCreator = require('../Tools/requestCreator.js');

const checkID = async (key, id) => {
    return await requestCreator(`/licenses/check/id/${id}`, key, 'GET');
}

module.exports = checkID;