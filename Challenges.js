// Challenge 1
// function foodToday(breakfast, lunch, dinner) {
//     console.log(`For breakfast I had ${breakfast}.\nFor my lunch I had ${lunch}.\nAnd for dinner I had ${dinner}`);
// }
// let breakfast = "Egg on toast"
// let lunch = "Chicken and rice"
// let dinner = "Burger and chips"
// foodToday(breakfast, lunch, dinner)

// breakfast = "Pancakes"
// lunch = "Chicken wraps with Sriracha mayo"
// dinner = "Sausage and beans on toast"
// foodToday(breakfast, lunch, dinner)

// Challenge 2
// function fizzBuzz(num) {
//     if (typeof num !== 'number' || num <= 0) {
//         console.log(`Input needs to be a positive number`);
//     } else if (num % 3 === 0 && num % 5 === 0) {
//         console.log(`Fizz buzz`);
//     } else if (num % 3 === 0) {
//         console.log(`Fizz`);
//     } else if (num % 5 === 0) {
//         console.log(`Buzz`);
//     }
// }
// fizzBuzz(15)
//Challenge 3

// let num1 = 5
// let num2 = 4
// function operateNumbers(num1, num2) {
//     // Check if both parameters are numbers
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return 'Error: Please enter two numbers.';
//     }
//     let sum = num1 + num2;
//     if (sum % 2 === 0) {
//         return sum;
//     } else {
//         return num1 * num2;
//     }
// }
// console.log (operateNumbers(num1, num2))

// Challenge 4 
// function ranNum(count, max) {
//     let result = []
//     for (let i = 0; i < count; i++) {
//         result.push(Math.ceil(Math.random() * max))
//     }
//     return result
// }
// let randomNumbers = ranNum(6, 50)
// console.log(randomNumbers)

//Challenge 5

// function nineToZero(start, end) {
//     let result = []
//     for (let i = start; i >= end; i--) {
//         result.push(i)
//     }
//     return result
// }
// let ntz = nineToZero(9, 0)
// console.log(ntz)
// Challenge 6
// let inputNumber = 251
// if (typeof inputNumber !== 'number' || inputNumber <= 0) {
//     console.log("Error: Please enter a positive number.")
// } else {
//     for (let i = 1; i <= 10; i++) {
//         let result = inputNumber * i
//         console.log(`${inputNumber} * ${i} = ${result}`)
//     }
// }

//challenge 7
// let mathScore = 85
// let scienceScore = 90
// let englishScore = 83


// function calculateAverage(mathScore, scienceScore, englishScore) {
//     let averageScore = (mathScore + scienceScore + englishScore) / 3
//     let letterGrade
//     if (averageScore >= 90) {
//         letterGrade = 'A'
//     } else if (averageScore >= 80) {
//         letterGrade = 'B'
//     } else if (averageScore >= 65) {
//         letterGrade = 'C'
//     } else {
//         letterGrade = 'F'
//     }
//     return { averageScore, letterGrade }
// }

// let { averageScore, letterGrade } = calculateAverage(mathScore, scienceScore, englishScore)

// console.log (`Your average grade is `, averageScore)
// console.log('Letter Grade:', letterGrade)
