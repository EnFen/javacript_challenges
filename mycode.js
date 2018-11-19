alert('Hello World!')
console.log('Secret message')
// This is a single line comment
/* This is a 
multi line comment */
document.write('<p>' + 'This is javascipt writing directly to the document' + '</p>')

let interestingInformation = 6

console.log(interestingInformation)

alert('interestingInformation ' + interestingInformation)

let insignificantInformation = 4

let allInformation = interestingInformation * insignificantInformation + '<br/>'

document.write(allInformation)

let firstName = 'Stinky '
let lastName = 'Wizzle-teats'

alert(firstName + lastName)

let numberOfAnimals = 14
let typeOfAnimal = 'Ducks'
let allTheAnimals = 'I have ' + numberOfAnimals + ' ' + typeOfAnimal + '!'
let allAnimals = `I have ${numberOfAnimals} ${typeOfAnimal}!`

alert(allTheAnimals)

document.write(allAnimals)