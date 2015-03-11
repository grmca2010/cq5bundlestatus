var cq5bundleapi=require("./lib/main");

var cq5bundle=cq5bundleapi.init("http://localhost:8080");

cq5bundle.getAllBundleStatus(function(error,response){
	response.data.forEach(function(element,index,Array){
		console.log("#Name:" +element.name +"\n  #state:"+element.state);		
	});
});