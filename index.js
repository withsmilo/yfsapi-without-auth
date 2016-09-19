/* global module, require */

'use strict';

module.exports = YahooFantasy;

var request = require('request'),
  querystring = require('querystring'),
  util = require('util'),
  GameResource = require('./resources/gameResource.js'),
  LeagueResource = require('./resources/leagueResource.js'),
  PlayerResource = require('./resources/playerResource.js'),
  RosterResource = require('./resources/rosterResource.js'),
  TeamResource = require('./resources/teamResource.js'),
  TransactionResource = require('./resources/transactionResource.js'),
  UserResource = require('./resources/userResource.js'),
  PlayersCollection = require('./collections/playersCollection.js'),
  GamesCollection = require('./collections/gamesCollection.js'),
  TeamsCollection = require('./collections/teamsCollection.js'),
  LeaguesCollection = require('./collections/leaguesCollection.js'),
  TransactionsCollection = require('./collections/transactionsCollection.js');
  // usersCollection = require('./collections/usersCollection.js');

function YahooFantasy() {
  this.GET = 'get';
  this.POST = 'post';

  this.game = new GameResource(this);
  this.games = new GamesCollection(this);
  this.league = new LeagueResource(this);
  this.leagues = new LeaguesCollection(this);
  this.player = new PlayerResource(this);
  this.players = new PlayersCollection(this);
  this.team = new TeamResource(this);
  this.teams = new TeamsCollection(this);
  this.transaction = new TransactionResource(this);
  this.transactions = new TransactionsCollection(this);
  this.roster = new RosterResource(this);
  this.user = new UserResource(this);
  // this.users = new UsersCollection(); // TODO
  
  this.yuser = {
    token: null
  };
}

YahooFantasy.prototype.setUserToken = function(userToken) {
  this.yuser.token = userToken;
};

YahooFantasy.prototype.api = function(method, url, postData, cb) {
  if ( arguments.length == 3 ) {
    cb = postData;
    postData = null;
  }
  
  var callback = this.apiCallback.bind(this, method, url, postData, cb);
  
  if ( this.POST == method ) {
    var options = {
      url: url,
      headers: { 'Authorization': 'Bearer ' + this.yuser.token,
                 'content-type': 'application/xml' },
      body: postData
    };
    request.post(options, callback);
  } else {
    var options = {
      url: url,
      headers: { 'Authorization': 'Bearer ' + this.yuser.token },
      rejectUnauthorized: false
    };
    request.get(options, callback);
  }
};

YahooFantasy.prototype.apiCallback = function(method, url, postData, cb, e, resp, data) {
  try {
    data = JSON.parse(data);
    
    if (e) {
      return cb(e);
    } else {
      if ( data.error ) {
        return cb(data.error);
      }
      
      return cb(null, data);
    }
  } catch (error) {
    return cb(error);
  }
};
