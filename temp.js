let temperature = parseInt(prompt('Please enter a temperature in Fahrenheit', '50'))
let condition = prompt('Please enter the conditions', 'Sunny')

if (temperature < 50) {
    console.log('It\'s cold outside. Make sure you put on a coat!')
} else if (temperature > 90 && condition == 'Sunny') {
    console.log('It\'s hot and bright outside. Make sure you put on a hat!')
} else if (condition == 'Rainy') {
    console.log('It\'s raining today. Don\'t forget your umbrella.')
} else {
    console.log('It\'s going to be a fine day!')
}