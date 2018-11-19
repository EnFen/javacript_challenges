let firstName = prompt('Please enter a first name for your user', 'Jerry')
let lastName = prompt('Please enter a last name for your user', 'Seinfeld')

// function fullName(first, last) {
//     console.log(first + ' ' + last)
// }

let fullName = (first, last) => {
    return first + ' ' + last
}

console.log(fullName(firstName, lastName))