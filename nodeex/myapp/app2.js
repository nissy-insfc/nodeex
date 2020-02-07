const express = require('express');
const app = express();

app.get('/user/:id',function(req,res,next){
//    if the user ID is 0, skip to the next route
    if(Number(req.params.id)===0){
        next('route');
    }else{
        next();
    }
},function(req,res,next){
    // render a regular page
    res.send('regular page');
    }
)

// handler for the /user/:id path, which renders a special page
app.get('/user/:id',function(req,res,next){
    res.send('special page');
})


//root
app.get('/',function(req,res){
        var responseText = 'Hello World!<br>';
        res.send(responseText);
});




app.listen(3000);


