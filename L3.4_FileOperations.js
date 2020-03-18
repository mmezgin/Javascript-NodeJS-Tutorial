//---------------------------------------------------------------------
//Creating and writing in a file
//---------------------------------------------------------------------
const fs = require('fs');
fs.writeFile('demo1.txt', 'blablablablabla', (err) => { // deletes everthing in a file and writes in it.
    if (err)
        throw err;
    console.log('Succesfull !')
});
fs.appendFile('demo2.txt', 'Appended text ', (err) => { //appends text in to the file
    if (err)
        throw err;
    console.log("Appended succesfully !");
});
//---------------------------------------------------------------------
//Reading file
//---------------------------------------------------------------------
fs.readFile('demo2.txt', (error, data) => { //reads file async. Need to use callback rules.
    if (error)
        console.log(error);
    console.log(data.toString());
    console.log("File reading done !");
});

const demoFile = fs.readFileSync('demo2.txt'); // reads sync. but sync functions not always useful. try to use async functions usually.
console.log(demoFile.toString());
console.log("Read with sync reader.");
//---------------------------------------------------------------------
//deleting file
//---------------------------------------------------------------------
fs.unlink('demo1.txt', (err) => {
    if (err)
        throw err;
    console.log("File has been deleted succesfully !");
});