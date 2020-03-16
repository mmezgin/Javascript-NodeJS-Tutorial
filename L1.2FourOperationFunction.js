
function fourOperations (a,b,op){
    if(op=="a"){
        return a+"+"+b+"="+(a+b);
    }
    else if(op=="s"){
        return a+"-"+b+"="+(a-b);
    }
    else if(op=="m"){
        return a+"*"+b+"="+(a*b);
    }
    else if(op=="d"){
        return a+"/"+b+"="+(a/b);
    }
}
console.log(fourOperations(8,4,"a"));
console.log(fourOperations(8,4,"s"));
console.log(fourOperations(8,4,"m"));
console.log(fourOperations(8,4,"d"));
