let x = 4;
let y = 8;
let namee = "Sunny";
let age = 29;
let isDarkMode = true;
let isLoggedIn = false;
let numbers = [1, 2, 3, 4, 5];
let emptyArray = [];

console.log("Is x greater than y? I predict False.");
console.log(x > y);

console.log("Is y greater than x? I predict True.");
console.log(y > x);

console.log("Is name equal to 'Taimoor'? I predict True.");
console.log(namee == 'Taimoor');

console.log("Is age less than or equal to 25? I predict False.");
console.log(age <= 25);

console.log("Is isDarkMode a boolean? I predict True.");
console.log(typeof isDarkMode === 'boolean');

console.log("Is isLoggedIn a boolean? I predict True.");
console.log(typeof isLoggedIn === 'boolean');

console.log("Is numbers an array? I predict True.");
console.log(Array.isArray(numbers));

console.log("Is emptyArray empty? I predict True.");
console.log(emptyArray.length === 0);

console.log("Does 'apple' exist in the fruits array? I predict False.");
console.log(numbers.includes(6));

console.log("Is the sum of x and y equal to 15? I predict True.");
console.log(x + y === 15);