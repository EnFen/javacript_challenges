let preTip = parseInt(prompt('Please enter the pre-bill cost of your meal', 'Meal cost'))

let tipPercentage = parseInt(prompt('What percentage would you like to tip?', 15)) / 100



function outputText(preTip, tipPercentage) {

    let total = preTip + (preTip * tipPercentage)

    let output = `Your total bill including tip is $${total.toFixed(2)}`

    document.write(output)
}

outputText(preTip, tipPercentage)