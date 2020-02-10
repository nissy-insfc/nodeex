module.exports = function(options){
	return function(req,res,next){
	if(option1=='1'){
		res.send('option1');
	}else{
		res.send('option:'+options);
	}
	next();
	}
}
