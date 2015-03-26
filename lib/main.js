var util  = require('util'),
  qs      = require('querystring'),
  request = require('request');

var init = exports.init = function (host) {
  var GETBUNDLESTATUS = host + '/system/console/bundles.json';
  console.log(GETBUNDLESTATUS);
    return {
    getAllBundleStatus: function (callback) {
      request({url: GETBUNDLESTATUS, auth: {user: 'admin', pass: 'admin'}}, function (error, response, body) {
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
