"use strict";
let invitedmore = new Array(10);
invitedmore = ['Ali', 'Ahmed', 'Aqib', 'Sunny'];
console.log("Before Adding New Guest =>");
for (var i = 0; i < invitedmore.length; i++) {
    console.log(invitedmore[i] + " you are invited to my party ");
}
invitedmore.splice(0, 0, 'Afaq');
invitedmore.splice(invitedmore.length, 0, 'Ibrahim');
invitedmore.splice(invitedmore.length / 2, 0, 'Adeel');
console.log("After Adding New Guest =>");
for (var i = 0; i < invitedmore.length; i++) {
    console.log(invitedmore[i] + " you are invited to my party ");
}
