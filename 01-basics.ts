// console.log("Hello World!")

let userName: string = "Elmer";
let userAge: number = 31;

// ...

userAge = 31

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

add(10)
// add('10')
add(10, 6)
// add(10, '6')

//What i learned: Typescript is basically JS with restrictions
//You have to state the data type of the variables before you compile your code into JS.
//Think of TS as a filteration for the water(your code) and JS as a filtered water 