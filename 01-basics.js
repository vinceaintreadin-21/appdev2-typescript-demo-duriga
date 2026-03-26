"use strict";
// console.log("Hello World!")
let userName = "Elmer";
let userAge = 31;
// ...
userAge = 31;
console.log(`Username - ${userName}`);
console.log(`Age - ${userAge}`);
function add(a, b = 5) {
    return a + b;
}

console.log(add(10));
// add('10')
add(10, 6);
// add(10, '6')
