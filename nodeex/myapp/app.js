const express = require('express');
const app = express();

//app.get('/',(req,res) => res.send('Hello world!'));

app.get('/',function(req,res){
	res.send('root');
});

app.get('/users/:userId/books/:bookId',function(req,res){
	res.send('Your ID is '+req.params.userId+' and book ID is '+req.params.bookId);
});


app.listen(3000, () => console.log('Example app listening on the port 3000!'));



