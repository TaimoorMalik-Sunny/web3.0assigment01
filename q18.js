"use strict";
let fplaces = new Array(10);
let sfplaces = new Array(10);
let rsfplaces = new Array(10);
let rrsfplaces = new Array(10);
let orrsfplaces = new Array(10);
fplaces = ['Sawat', 'Naran', 'Egypt', 'Iran', 'China'];
console.log("<== My favorite Places are given below==>");
console.log("<== 1 Given List in Orignal form==>");
for (var i = 0; i < fplaces.length; i++) {
    console.log(fplaces[i] + " is my favorite place in the world");
}
console.log("<== 2 Given List in alphabetical order form==>");
sfplaces = [...fplaces];
sfplaces.sort();
for (var i = 0; i < sfplaces.length; i++) {
    console.log(sfplaces[i] + " is my favorite place in the world");
}
console.log("<== 3 Showing Given List in Orignal form part 2==>");
for (var i = 0; i < fplaces.length; i++) {
    console.log(fplaces[i] + " is my favorite place in the world");
}
console.log("<== 4 Given List reverse in alphabetical order form==>");
rsfplaces = [...sfplaces];
rsfplaces.reverse();
for (var i = 0; i < rsfplaces.length; i++) {
    console.log(rsfplaces[i] + " is my favorite place in the world");
}
console.log("<== 5 Showing Given List in Orignal form part 3==>");
for (var i = 0; i < fplaces.length; i++) {
    console.log(fplaces[i] + " is my favorite place in the world");
}
console.log("<== 6 Given List reverse form orignal form==>");
rrsfplaces = [...fplaces];
rrsfplaces.reverse();
for (var i = 0; i < rrsfplaces.length; i++) {
    console.log(rrsfplaces[i] + " is my favorite place in the world");
}
console.log("<== 7 Revers List to again revers to get orignal list==>");
orrsfplaces = [...rrsfplaces];
orrsfplaces.reverse();
for (var i = 0; i < orrsfplaces.length; i++) {
    console.log(orrsfplaces[i] + " is my favorite place in the world");
}
