const requestCreator = require('../Tools/requestCreator.js');

const name = async (key, name) => {
    return await requestCreator(`/licenses/delete/name/${name}`, key, 'DELETE');
}

module.exports = name;