let hobbies = ["Eating", "Watching"]

// hobbies.push(10)

// let userList: (string | number | boolean)[];
let userList: Array<string | number | boolean>; 
//in this LOC, you're basically telling TS to accept any data that fits the data types assigned in an array, other than that TS rejects it

userList = ["Elmer", "Elmer123", 123456 , true]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Vincent",
    age: 21,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
} //object works the same way as in JS but since its TS, you have to assign its variable



// Must not null or undefined
let val: {} = "Elmer Alvarado"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Elmer'
    // isPartTimeInstructor: true
}

const greetings = () => {
    console.log(`Welcome to your dashboard ${user.name}!`)
}

const showRole = () => {
    console.log(`Your role in this system is ${user.role.description}`)
}

const showHobbies = () => {
    console.log(`Your hobbies are ${user.hobbies[0]}`)
    console.log(`Your hobbies are ${user.hobbies[1]}`)
}

greetings()
showRole()
showHobbies()


