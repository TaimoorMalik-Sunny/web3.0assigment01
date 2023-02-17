"use strict";
var string1 = '      sunny malik   ';
function strip(string1) {
    return string1.replace(/^\s+|\s+$/g, '');
}
console.log("Before string:'" + string1 + "'");
console.log("After string :'" + strip(string1) + "'");
