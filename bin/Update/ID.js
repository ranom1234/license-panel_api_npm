const requestCreator = require('../Tools/requestCreator.js');

const id = async (key, id, data) => {
    return await requestCreator(`/licenses/update/id/${id}`, key, 'PUT', data);
}

module.exports = id;