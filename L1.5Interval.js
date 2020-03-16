var count=5;
var inter= setInterval(function(){
    console.log(count);
    if (count==1){
        clearInterval(inter);
        console.log("BOOM");
    }
    
    count--;
},1000);
