"use strict";
let no_User_name = new Array(5);
no_User_name = ['sunny', 'taimoor47', 'Adeel', 'admin', 'afaq'];
console.log("<== Incase User Array is not empty! ==>");
if (no_User_name.length <= 0) {
    console.log("No user found!");
}
else {
    for (var i = 0; i < no_User_name.length; i++) {
        if (no_User_name[i] === 'admin') {
            console.log("Hello " + no_User_name[i] + " , would you like to see a status report ?");
            no_User_name.splice(i, 1);
            i--;
        }
        else {
            console.log("Hello " + no_User_name[i] + " , thank you for logging in again");
            no_User_name.splice(i, 1);
            i--;
        }
    }
}
console.log("<== Incase User Array is  empty! ==>");
if (no_User_name.length <= 0) {
    console.log("No user found!");
}
else {
    for (var i = 0; i < no_User_name.length; i++) {
        if (no_User_name[i] === 'admin') {
            console.log("Hello " + no_User_name[i] + " , would you like to see a status report ?");
        }
        else {
            console.log("Hello " + no_User_name[i] + " , thank you for logging in again");
        }
    }
}
