// const multiplyByNineFifthys = (celsius) =>{
//     return celsius * (9/5)
// }

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifthys(celsius) + 32
// }

// console.log("the temperature is " + getFahrenheit(35) + "°F")

// let minus = (fahrenheit) => {
//     return fahrenheit - 32
// }

// let getCelsius = (fahrenheit) => {
//     return minus(fahrenheit) * 5/9
// }
// console.log (Math.round(getCelsius(55)))

let mathScore = 85
let scienceScore = 90
let englishScore = 83


function calculateAverage(mathScore, scienceScore, englishScore) {
    let averageScore = (mathScore + scienceScore + englishScore) / 3
    let letterGrade
    if (averageScore >= 90) {
        letterGrade = 'A'
    } else if (averageScore >= 80) {
        letterGrade = 'B'
    } else if (averageScore >= 65) {
        letterGrade = 'C'
    } else {
        letterGrade = 'F'
    }
    return { averageScore, letterGrade }
}

let { averageScore, letterGrade } = calculateAverage(mathScore, scienceScore, englishScore)

console.log (`Your average grade is `, averageScore)
console.log('Letter Grade:', letterGrade)
