## Notice

This repository was forked from [whatadewitt/yfsapi](https://github.com/whatadewitt/yfsapi). I would like to use the [Yahoo Fantasy Sports API](https://developer.yahoo.com/fantasysports/guide) with the [Yahoo OAuth 2.0](https://developer.yahoo.com/oauth2/guide), but yfsapi contains the Yahoo OAuth 1.0 flows internally. So I removed them from yfsapi. If you have the aim to use this `yahoo-fantasy-without-auth` module, **you must implement the Yahoo OAuth 2.0 flows in your own NodeJS app and handle the refresh token on session expired.** This module needs your access token only.

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
Refer to [api.md](https://github.com/githubsmilo/yfsapi-without-auth/blob/master/docs/api.md) if you would like to know APIs in detail.

## License

This module is available under the [MIT License](http://opensource.org/licenses/MIT).

## Sample

Refer to [yfsapi-oauth2-test-sandbox](https://github.com/githubsmilo/yfsapi-oauth2-test-sandbox).

