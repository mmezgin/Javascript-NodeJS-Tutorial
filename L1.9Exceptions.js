try{
    var n1=1,n2=0,result=n1/n2;
    if(n2==0){
        throw Error("n2 cannot be '0' !");
    }
    console.log(result);
}
catch(error){
    console.log(error);
}
finally{
    console.log(n1+"/"+n2);
}
