function convertDigit(number) {
    let digits = ['A', 'B', 'C', 'D', 'E', 'F']
    if (number >= 10) {
        number = digits[number - 10]
    }
    return number
}

function decimalConverter(decimal_number, base) {
    result = []
    while (decimal_number > 0) {
        result.unshift(decimal_number % base)
        decimal_number = (decimal_number - (decimal_number % base)) / base
    }
    if (base > 10) {
        result = result.map(x => convertDigit(x))
    }
    return result.join("")
}

console.log(decimalConverter(31, 12))
// console.log(convertDigit(6))