var util=require("util");
var qs=require("querystring");
var request=require("request");

var init = exports.init = function(host) {
	var GETBUNDLESTATUS = '%s/system/console/bundles.json';
    return {
		getAllBundleStatus:function(callback){
			request({url:"http://admin:admin@localhost:4502/system/console/bundles.json"},function(error,response,body){
				if ( error || response.statusCode !== 200 ) {
                    callback(error || true, response);
                    return;
                }
				//var data=JSON.parse(response.body.toString());	
				var data=response.body;					
				callback(null,JSON.parse(data));
			});
		}
	}
};
