let age: any = 31

// ...

age = '31'
age = true
age = {}
age = ['', '']

console.log(typeof age)

//notice the variable age, the reason i can freely change its datatype in typescript its because of how i declared its variable as 'any'