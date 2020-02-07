const express = require('express');
const app = express();

/*
var mylogger = function(req,res,next){
	console.log('LOGGED');
	next();
}
*/

var requestTime = function(req,res,next){
	req.requestTime = Date.now();
	next();
}


app.use(requestTime);

app.get('/',function(req,res){
	var responseText = 'Hello World!<br>';
	responseText += 'requested at:' + req.requestTime;
	res.send(responseText);
});

/*
app.get('/users/:userId/books/:bookId',function(req,res){
	res.send('Your ID is '+req.params.userId+' and book ID is '+req.params.bookId);
});
*/

app.listen(3000, () => console.log('Example app listening on the port 3000!'));



