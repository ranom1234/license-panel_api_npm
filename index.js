const show = require('./bin/Show/require');
const check = require('./bin/Check/require');
const create = require('./bin/Create/require');
const deletion = require('./bin/Delete/require');
const update = require('./bin/Update/require');

module.exports = (apiKey) => {
  return {
      show: {
          All: () => { //SHOWS ALL Licenses
              return show.showAll(apiKey);
          },

          //SHOWS LICENSES OF USER
          User: () => {
              return show.showUser(apiKey);
          }
      },

      filter: {
        //FILTERS BY NAME
          byName: (name) => {
              return show.showName(apiKey, name);
          },

          //FILTERS BY KEY
          byKey: (key) => {
              return show.showKey(apiKey, key);
          },

          //FILTERS BY TYPE
          byType: (type) => {
              return show.showType(apiKey, type);
          },

          //FILTERS BY VALIDITY
          byValidity: (validity) => {
              return show.showValidity(apiKey, validity);
          }
      },


      check: {
          //CHECK BY ID
          id: (id) => {
              return check.checkId(apiKey, id);
          },

          //CHECK BY KEY
          key: (key) => {
              return check.checkKey(apiKey, key);
          },

          //CHECK BY NAME
          name: (name) => {
              return check.checkName(apiKey, name);
          }
      },


      create: {
          //CREATE TIME LICENSE
          timeLicense: (data) => {
              return create.timeLicense(apiKey, data);
          },

          //CREATE KEY LICENSE
          keyLicense: (data) => {
              return create.keyLicense(apiKey, data);
          },

          //CREATE CUSTOMLICENSE
          customLicense: (data) => {
              return create.customLicense(apiKey, data);
          }
      },


      delete: {
          //BY ID
          id: (id) => {
              return deletion.deleteID(apiKey, id);
          },

          //BY KEY
          key: (key) => {
              return deletion.deleteKey(apiKey, key);
          },

          //BY NAME
          name: (name) => {
              return deletion.deleteName(apiKey, name);
          }
      },


      update: {
          //BY ID
          id: (id, data, method = 'PUT') => {
              return update.updateID(apiKey, id, data, method);
          },

          //BY KEY
          key: (key, data, method = 'PUT') => {
              return update.updateID(apiKey, key, data, method);
          },

          //BY NAME
          name: (name, data, method = 'PUT') => {
              return update.updateID(apiKey, name, data, method);
          }
      }
    };
};