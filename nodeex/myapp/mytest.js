var express = require('express');
var app = express();
var mw = require('./mw.js');

app.use(mw({option1:'1',option2:'2'}));

app.listen(3000);
