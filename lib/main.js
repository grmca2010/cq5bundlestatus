var util=require("util");
var qs=require("querystring");
var request=require("request");

var init = exports.init = function(host) {
	var GETBUNDLESTATUS = host+'/system/console/bundles.json';
	console.log(GETBUNDLESTATUS);
    return {
		getAllBundleStatus:function(callback){
			request({url:GETBUNDLESTATUS},function(error,response,body){
				if ( error || response.statusCode !== 200 ) {
                    callback(error || true, response);
                    return;
                }				
				var data=response.body;					
				callback(null,JSON.parse(data));
			});
		}
	}
};
