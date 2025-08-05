const requestCreator = require('../Tools/requestCreator.js');

const key = async (key, key_delete) => {
    return await requestCreator(`/licenses/delete/key/${key_delete}`, key, 'DELETE');
}

module.exports = key;