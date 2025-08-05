# LPAPI (License-Panel API) npm SDK

This is the License-Panel API (short LPAPI) npm SDK documentation. The License-Panel API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs. The License-Panel API doesn’t support bulk updates. You can work on only one object per request. This API uses Bearer-Tokens generated in the panel of your user account to authenticate requests. [READ MORE](https://api.license-panel.com)



## Documentation
[Documentation](https://api.license-panel.com)


## Tech Stack

**Server:** Node, Express

**Subscription:** In order to gain access to the License-Panel API you need a valid subscription at License-Panel.com

**Permissions:** You have to deploy at least one API key via the panel and assign one or more permissions.


## License

[MIT](https://choosealicense.com/licenses/mit/) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Installation

Install LPAPI SDK with npm

```bash
  npm install --save license-panel-api
```

## Authentication
You can initialize the SDK by requiring the licsen-panel-api module in your Node.js index file. The SDK is organized around your first initialized function cohering to the names and paths found in our API docs as well. All functions are asynchronous and have thus to be executed within another asynchronous function awaiting a response.

```javascript
const LPAPI = require('license-panel-api');
const lpapi = LPAPI('API KEY');
```


## Requesting and filtering licenses

**Request all licenses**
```javascript
const request = async () => {
    await lpapi.show.All();
};
```

**Request all licenses of the API-Key user**
```javascript
const request = async () => {
    await lpapi.show.User();
};
```

**Show licenses similar or identical to a given name**
```javascript
const request = async () => {
    await lpapi.filter.byName(name);
};
```

**Show licenses similar or identical to a given key**
```javascript
const request = async () => {
    await lpapi.filter.byKey(key);
};
```

**Show licenses with a given validity**
```javascript
const request = async () => {
    await lpapi.filter.byValidity(active/inactive);
};
```


## Check if licenses are valid

**Check by providing an ID**
```javascript
const request = async () => {
    await lpapi.check.id(id);
};
```

**Check by providing a key**
```javascript
const request = async () => {
    await lpapi.check.key(key);
};
```

**Check by providing a name**
```javascript
const request = async () => {
    await lpapi.check.name(name);
};
```
## Create licenses
For details on how to structure the POST body, please refer to the API docs at api.license-panel.com


**Create a TimeLicense**
```javascript
const request = async () => {
    await lpapi.create.timeLicense(data);
};
```

**Create a KeyLicense**
```javascript
const request = async () => {
    await lpapi.create.keyLicense(data);
};
```

**Create a CustomLicense**
```javascript
const request = async () => {
    await lpapi.create.customLicense(data);
};
```
## Delete licenses

**Delete a license by providing an ID**
```javascript
const request = async () => {
    await lpapi.delete.id(id);
};
```

**Delete a license by providing a key**
```javascript
const request = async () => {
    await lpapi.delete.key(key);
};
```

**Delete a license by providing a name**
```javascript
const request = async () => {
    await lpapi.delete.name(name);
};
```
## Update licenses
For details on how to structure the PUT body, please refer to the API docs at api.license-panel.com

**Update a license by providing an ID**
```javascript
const request = async () => {
    await lpapi.update.id(id, data);
};
```

**Update a license by providing a key**
```javascript
const request = async () => {
    await lpapi.update.key(key, data);
};
```

**Update a license by providing a name**
```javascript
const request = async () => {
    await lpapi.update.id(name, data);
};
```
## Support

For support, email support@license-panel.com or open a ticket via the Panel at License-Panel.com

