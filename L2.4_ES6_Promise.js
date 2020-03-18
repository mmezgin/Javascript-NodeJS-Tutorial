const ascendingNumbers = (n1) => {
    return new Promise((resolve, reject) => {
        if (n1 == 5)
            resolve('Correct order !');
        else
            reject("Wrong input");

    })
};

ascendingNumbers(5)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
        return 2;
    })
    .then((data) => {
        console.log(data);
        return 3;
    })
    .then((data) => {
        console.log(data);
        return 4;
    })
    .then((data) => {
        console.log(data);
        return 5;
    })