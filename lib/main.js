var request = require('request');

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

function getAllBundleStatus (callback) {
  request(config, function (error, response) {
    if (error || response.statusCode !== 200) {
      callback(error || 'Response code ' + response.statusCode, response);
    } else {
      callback(null, JSON.parse(response.body));
    }
  });
}

module.exports = function (options) {
  host = options.host || host;
  config.url = host + path;

  return {
    getAllBundleStatus: getAllBundleStatus
  }
};
