var util  = require('util'),
  qs      = require('querystring'),
  request = require('request');

var path = '/system/console/bundles.json',
  username = 'admin',
  password = 'admin',
  host     = 'http://localhost:4502',
  config   = {
    auth: {
      user: username,
      pass: password
    }
  };


module.exports = function (options) {
  host = options.host || host;
  config.url = host + path;

  return {
    getAllBundleStatus: function (callback) {
      request(config, function (error, response, body) {
        if (error || response.statusCode !== 200) {
          callback(error || 'Response code ' + response.statusCode + ' is not 200', response);
          return;
        }
        var data = response.body;
        callback(null, JSON.parse(data));
      });
    }
  }
};
