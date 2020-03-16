function introduce(name,callback){
    console.log("Hi, my name is "+name+".");
    callback();
}

introduce("Mert",function (a=21){
    console.log("I'm "+a+" years old !");
});
