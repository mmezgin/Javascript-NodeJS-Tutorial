let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 5, 6, 7, 8];

console.log(arr2);

const arr3 = ["apple", "orange", "strawberry", "watermelon", "pineapple", "banana", "grape"];
const [a, b, c, ...rest] = arr3;
console.log(arr3);
console.log(rest);
console.log(...rest);