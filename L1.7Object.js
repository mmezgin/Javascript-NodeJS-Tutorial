var car={
    mark:"Mercedes",
    type:"Sedan",
    model:"E 180 Exclusive",
    year:2017,
    price:420500.25,
    information: function(){
        return " Mark: "+car.mark+"\n Type: "+car.type+"\n Model: "+car.model+"\n Year: "+car.year+" \n Price: "+car.price+" TL";
    }
};

console.log(car.information());
