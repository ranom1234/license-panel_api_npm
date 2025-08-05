const requestCreator = require('../Tools/requestCreator.js');

const time = async (key, data) => {
    return await requestCreator(`/licenses/create/timeLicense`, key, 'POST', data);
}

module.exports = time;