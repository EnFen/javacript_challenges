// for (let i = 1; i <= 12; i++) {
//     for (let j = 1; j <= 12; j++) {
//         console.log(`${i} X ${j} = ${i * j}`)
//     }
//     console.log('\n')
// }

let favFoods = ['cajun chicken', 'pork knuckle', 'chicken parmagiana', 'apple pie', 'ramen', 'jambalaya', 'pumpkin risotto', 'massamun curry', 'tom-yum soup', 'nachos', 'ice cream']

chosenFood = favFoods.splice(4, 1)

// for (let food of favFoods) {
//     document.write(`<p> ${food}</p>`)
// }

// document.write(`<strong><p> My chosen food for today is ${chosenFood}</p></strong>`)

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

for (let index in favFoods) {
    index++
    document.write(`<p> ${index} : ${capitalizeFirstLetter(favFoods[index - 1])}</p>`)
    if (index % 3 === 0) {
        document.write('-------------------------------------------------')
    }
}

// let selectedFood = prompt('What food would you like from the menu?')

// if (favFoods.find(x => x === selectedFood)) {
//     document.write(`<p> Yes! We have ${capitalizeFirstLetter(selectedFood)} available! </p>`)
// } else {
//     document.write(`<p> Sorry, ${capitalizeFirstLetter(selectedFood)} is not available on our menu! </p>`)
// }
let vowels = ['a', 'e', 'i', 'o', 'u']
let vowelStart = favFoods.filter(food => vowels.includes(food[0])).join('<br/>')

document.write(`<p> My favourite foods which start with a vowel are: <br/> ${vowelStart} </p>`)

// This also works...
// let searchVowels = favouriteFoods.filter(x => /^[aeiou]/i.test(x));
// console.log(searchVowels)
// let list = searchVowels.join('<br>')
// document.write(list)