## Notice

This repository was forked from [whatadewitt/yfsapi](https://github.com/whatadewitt/yfsapi). I would like to use the [Yahoo Fantasy Sports API](https://developer.yahoo.com/fantasysports/guide) with the [Yahoo OAuth 2.0](https://developer.yahoo.com/oauth2/guide), but yfsapi contains the Yahoo OAuth 1.0 flows internally. So I removed them from yfsapi. If you have the aim to use this module, `yahoo-fantasy-without-auth`, **you must implement the Yahoo OAuth 2.0 flows in your own NodeJS app and handle the refresh token on session expired.** This module needs your access token only.

## Installation

```bash
$ npm install yahoo-fantasy-without-auth
```

## How to use

```javascript
var FantasySports = require('yahoo-fantasy-without-auth');

var yf = new FantasySports();

// Set your access token given by Yahoo OAuth 2.0.
yf.setUserToken(ACCESS_TOKEN_GIVEN_BY_YAHOO);

// query a resource/subresource.
yf.{resource}.{subresource} (
  {possible argument(s)},
  function cb(err, data) {
    // handle error
    // callback function
    // do your thing
  }
);
```
Refer to [api.md](https://github.com/withsmilo/yfsapi-without-auth/blob/master/docs/api.md) if you would like to know APIs in detail.

## License

This module is available under the [MIT License](http://opensource.org/licenses/MIT).

## Sample

Refer to [yfsapi-oauth2-test-sandbox](https://github.com/withsmilo/yfsapi-oauth2-test-sandbox).

## Changed logs

#### 1.0.2
* Merged with yfsapi v1.0.2.

#### 0.5.0
* Merged with yfsapi v0.5.0.

#### 0.3.2
* Implement transactions' add/drop player APIs.
* Create api.md for documentation.

#### 0.3.1
* Remove the Yahoo OAuth 1.0 flows from [yfsapi 0.3.1](https://github.com/whatadewitt/yfsapi#031).

