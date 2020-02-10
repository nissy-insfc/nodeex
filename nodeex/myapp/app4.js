const express = require('express');
const app = express();

app.get('', function(req, res){
    res.send('<h1>Weather</h1>');
});

app.get('/help', function(req, res){
    res.send([{
        name: 'Andrew'
    }, {
        name: 'Sarah'
    }]);
});

app.get('/about', function(req, res){
    res.send('<h1>About</h1>');
});

app.get('/weather', function(req, res){
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.listen(3000);
