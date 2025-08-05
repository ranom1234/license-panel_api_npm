const requestCreator = require('../Tools/requestCreator.js');

const name = async (key, name, data) => {
    return await requestCreator(`/licenses/update/name/${name}`, key, 'PUT', data);
}

module.exports = name;