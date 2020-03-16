var mix=[31,42,35,46,35,45,634,32,486,79,35,12,352,14,98435,342],odd=[],even=[];
mix.forEach(function(x){
    console.log(x);
});
console.log("This is the odd/even mixed array. We need to seperate them into odd and even arrays !");
for(var i=0;i<mix.length;i++){
    if(mix[i]%2==0){
        even[i]=mix[i];
    }
    else{
        odd[i]=mix[i];
    }
}
console.log("Odd numbers !");
odd.forEach(function(x){
    console.log(x);
});
console.log("Even numbers !");
even.forEach(function(x){
    console.log(x);
});


