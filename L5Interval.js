var count=5;
var inter= setInterval(function(){
    if (count==0){
        clearInterval(inter);
        console.log("BOOM");
    }
    console.log(count);
    count--;
},1000);