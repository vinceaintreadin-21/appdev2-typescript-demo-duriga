"use strict";
let hobbies = ["Eating", "Watching"];
// hobbies.push(10)
// let userList: (string | number)[];
let userList;
userList = ["Elmer", "Elmer123", 123456];
// console.log(userList)
let user = {
    name: "Vincent",
    age: 21,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
};
// Must not null or undefined
let val = "Elmer Alvarado";
// Flexible Object - Record Type
let data;
data = {
    1: 1,
    name: 'Elmer'
    // isPartTimeInstructor: true
};
const greetings = () => {
    console.log(`Welcome to your dashboard ${user.name}!`);
};
const showRole = () => {
    console.log(`Your role in this system is ${user.role.description}`);
};
const showHobbies = () => {
    console.log(`Your hobbies are ${user.hobbies[0]}`);
    console.log(`Your hobbies are ${user.hobbies[1]}`);
};
greetings();
showRole();
showHobbies();
