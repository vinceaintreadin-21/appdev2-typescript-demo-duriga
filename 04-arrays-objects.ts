let hobbies = ["Eating", "Watching"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Elmer", "Elmer123", 123456]

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
}

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


