"use strict";
let pizza_name = new Array(10);
pizza_name = ['Margherita Pizza', 'Pepperoni Pizza ', 'Chicken Tikka Pizza', 'Fajita Pizza', 'BBQ Chicken Pizza', 'Vegetarian Pizza', 'Meat Lover Pizza', 'Hawaiian Pizza', 'Buffalo Chicken Pizza', 'Garlic Chicken Pizza'];
console.log("Pizza List ==>");
for (var i = 0; i < pizza_name.length; i++) {
    console.log(pizza_name[i]);
}
console.log("Pizza List with statment ==>");
for (var i = 0; i < pizza_name.length; i++) {
    console.log("I like " + pizza_name[i] + " Pizza");
}
console.log("Total number of Pizza you like to eat " + pizza_name.length + " I realy love Pizza ");
