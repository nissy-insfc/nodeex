const express = require('express');
const app = express();

//app.get('/',(req,res) => res.send('Hello world!'));

app.get('/',function(req,res){
	res.send('GET request to the page');
});

app.post('/',function(req,res){
	res.send('POST request to the page');
});

app.listen(3000, () => console.log('Example app listening on the port 3000!'));



