## Notice

This repository is forked from [whatadewitt/yfsapi](https://github.com/whatadewitt/yfsapi). I removed the authentication process for OAuth 2.0.
Detail changes are below.

* Change all `http://` urls to `https://` urls.
* Replace `https` module of `request` module for https request.
* Remove OAuth 1.0 module.
* Remove consumer-key, comsumer-secret, yuser-secret and yuser-sessionHandle.
  * We do not need these variables anymore.
  * External OAuth 2.0 application must handle them.
* Remove the codes to refresh userToken.
  * External app using OAuth 2.0 must handle it.
  * Set set new token using setUserToken API.

## Installation

```bash
$ npm install yahoo-fantasy-without-auth
```

## How to use

```javascript
var YantasySports = require('yahoo-fantasy-without-auth');

var yf = new YantasySports();

yf.setUserToken(ACCESS_TOKEN_GIVEN_BY_YAHOO);

// query a resource/subresource
yf.{resource}.{subresource} (
  {possible argument(s)},
  function cb(err, data) {
    // handle error
    // callback function
    // do your thing
  }
);
```

## License

This module is available under the [MIT License](http://opensource.org/licenses/MIT).

## Sample

Refer to [yfsapi-oauth2-sample-app](https://github.com/githubsmilo/yfsapi-oauth2-sample-app).

