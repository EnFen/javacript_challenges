// let user = prompt('What is your name?', 'Tom')
// let age = parseInt(prompt('What is your age?', 18))

// if (age >= 18) {
//     console.log(`Hello ${user}. Welcome to the casino!`)
// } else {
//     alert(`Hello ${user}. Sorry you are too young to enter the casino. Come back in ${18 - age} years!`)
// }

// let students = []

// students.push('Sarah')

// for (i = 0; i < 3; i++) {
//     students.push(prompt('What is the next students name?'))
// }

// for (i = 0; i < students.length; i++) {
//     document.write(`<ul><li> ${students[i]} </li></ul>`)
// }

// let students = {}

// for (i = 0; i < 3; i++) {
//     students[prompt('What is the next students name?')] = parseInt(prompt('What is the students age?'))
// }

// for (var key in students) {
//     document.write(`<ul><li> ${key} is ${students[key]} years old. </li></ul>`)
// }

let students = []

for (i = 0; i < 3; i++) {
    students.push({
        name: prompt('What is the next students name?'),
        age: parseInt(prompt('What is the students age?'))
    })
}

// console.log(students)

// for (var i = 0, len = students.length; i < len; i++) {
//     console.log(students[i])
// }

for (let student of students) {
    document.write(`<ul><li> ${student.name} is ${student.age} years old. </li></ul>`)
}