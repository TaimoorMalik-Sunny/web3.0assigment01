let name11 = 'Sunny';
let name2 = 'Taimoor';
let number1 = 5;
let number2 = 10;
let fruits = ['apple', 'banana', 'orange'];
let cars = ['Ford', 'Chevrolet', 'Toyota'];

console.log("Is name1 equal to name2? I predict False.");
console.log(name11 === name2);

console.log("Is name1 not equal to name2? I predict True.");
console.log(name11 !== name2);

console.log("Is name1 lowercase equal to 'Sunny'? I predict True.");
console.log(name11.toLowerCase() === 'Sunny');

console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2);

console.log("Is number1 greater than or equal to number2? I predict False.");
console.log(number1 >= number2);

console.log("Is number1 equal to 5 and number2 equal to 10? I predict True.");
console.log(number1 === 5 && number2 === 10);

console.log("Is number1 equal to 10 or number2 equal to 5? I predict False.");
console.log(number1 === 10 || number2 === 5);

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'Ford' not in the cars array? I predict False.");
console.log(!cars.includes('Ford'));
