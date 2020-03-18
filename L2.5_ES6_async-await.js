const person = {
    name: "Mert",
    surname: "Ezgin",
    born_year: 1998
}
const physical_features = {
    weight: 80,
    height: 190
}
const getPerson = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(person);
        }, 2000);
    });
};
const getPF = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(physical_features)
        }, 1000);
    });
};
async function output() {
    const person = await getPerson();
    const physical_features = await getPF();
    console.log(person, physical_features);
}
output();