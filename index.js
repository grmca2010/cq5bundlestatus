var cq5bundleapi = require('./lib/main'),
  cq5bundle      = cq5bundleapi.init('http://localhost:4502');

cq5bundle.getAllBundleStatus(function (error, response) {
  response.data.forEach(function (element, index, Array) {
    console.log('#Name: ', element.name, + '#state:', element.state);   
  });
});