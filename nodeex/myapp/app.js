const express = require('express');
const app = express();

//app.get('/',(req,res) => res.send('Hello world!'));

app.get('/',function(req,res){
	res.send('root');
});

app.get('/about',function(req,res){
	res.send('about');
});


app.listen(3000, () => console.log('Example app listening on the port 3000!'));



