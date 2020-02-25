function process1(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve('answer:1');
        },2000)
    });
}

function process2(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve('answer:2');
        },500)
    });
}

function process3(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve('answer:3');
        },1000)
    });
}

Promise.all([process1(),process2(),process3()])
.then(function(data){
    console.log(data);
    console.log('finished');
});
//1-2-3
