const promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve('foo');
        },1000);
});

promise1.then(function(value){
    console.log(value);//'foo'
});

console.log(promise1);//Promise (pending)

