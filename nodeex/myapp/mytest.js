const express = require('express');
const  app = express();
const mw = require('./mw.js');

app.use(mw({option1:'1',option2:'2'}));

app.listen(3000);
