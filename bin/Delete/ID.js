const requestCreator = require('../Tools/requestCreator.js');

const id = async (key, id) => {
    return await requestCreator(`/licenses/delete/id/${id}`, key, 'DELETE');
}

module.exports = id;