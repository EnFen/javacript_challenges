// let me = {}

// me.age = 36
// me.currentLocation = 'Brisbane'

// console.log(`My age is ${me.age} and my current location is ${me.currentLocation}`)

// me.hobbies = ['film', 'games', 'drawing']

// delete me.age

// me.showHobbies = function () {
//     list = ''
//     for (hobby of me.hobbies) {
//         list += hobby + '\n'
//     }
//     return list
// }

// console.log(`My my current location is ${me.currentLocation}, and my hobbies are: \n${me.showHobbies()}`)

// me.hobbies.push('ping-pong')
// me.hobbies.shift()

// me.mother = {}

// me.mother.age = 58
// me.mother.currentLocation = 'Sydney'

// me.print_details = function () {
//     console.log(`My my current location is ${me.currentLocation}, and my hobbies are: \n${me.showHobbies()}My mother is ${me.mother.age} years old, and is currently in ${me.mother.currentLocation}.`)
// }

// me.print_details()
// me.print_details

const sydney_campus = {
    state: 'NSW',
    street: '7 Kelly St'
};
const brisbane_campus = {
    state: 'QLD',
    street: '205 N Quay'
};
const melbourne_campus = {
    state: 'VIC',
    street: '120 Spencer St'
};
const coder_academy = {
    sydney: sydney_campus,
    melbourne: melbourne_campus,
    brisbane: brisbane_campus
};

delete brisbane_campus.state

console.log(brisbane_campus.street + ', ' + brisbane_campus.state)