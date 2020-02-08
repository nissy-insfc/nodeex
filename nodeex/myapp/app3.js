const express = require('express');
const app = express();
const router = express.Router();

router.use(function(req,res,next){
    console.log('Time:',Date.now());
    next();
});


router.use('/user/:id',function(req,res,next){
    console.log('Request URL:',req.originalUrl);
    next();

},function(req,res,next){
    console.log('Request Type:',req.method);
    next();
});


router.get('/user/:id',function(req,res,next){
    if(Number(req.params.id)===0){
        next('route');
    }else{
        next();
    }
},function(req,res,next){
    res.send('regular');
});

router.get('/user/:id',function(req,res,next){
    console.log(req.params.id);
    res.send('special');
});


app.use('/',router);

app.use(function(req, res, next) {
      res.status(404).send("Sorry can't find that!");
});

app.listen(3000);
