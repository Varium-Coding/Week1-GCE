// console.log ("im arrays")

// let coffeOrder = [
//     "bob - latte",
//     "sarah - americano",
//     "steve - flat white"
// ]
// console.log (coffeOrder.length)

//Manipulation
// let numbers = [
//     5,
//     4,
//     15,
//     120,
//     23,
//     48,
// ]
// console.log(numbers[1])
// numbers[1] = 26
// console.log(numbers[1])
// numbers.push (551)
// console.log(numbers)
// numbers.pop(4)
// console.log(numbers)
// numbers.unshift(2260)
// console.log(numbers)
// numbers.shift(1)
// console.log(numbers)



//Iteration

// let names = [
//     `lia`,
//     `silus`,
//     `lightbeer`,
//     `nenna`,
//     `anton`
// ]
// names.forEach((element) => console.log(element))

// let capitalizedNames = names.map(function(names){
//     return names.charAt(0).toUpperCase() + names.slice(1);
// })
// console.log(capitalizedNames)
// let namesStartA = names.filter(name => name.charAt(0).toLowerCase() === 'a');
// console.log(namesStartA)


//Search and sorting
// let numbers = [
//     5,
//     4,
//     15,
//     120,
//     23,
//     48,
// ]
// console.log(numbers.includes(5))
// console.log(numbers.indexOf(120))

// let names = [
//     `lia`,
//     `silus`,
//     `lightbeer`,
//     `nenna`,
//     `anton`
// ]
// names.sort()

// console.log(names)
// names.reverse()
// console.log(names)

//Transformation
// let numbers = [
//     5,
//     4,
//     15,
//     120,
//     23,
//     48,
// ]
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum)
let numbers = [
    5,
    4,
    15,
    120,
    23,
    48,
]
// // slice(1) will do all numbers below position 1,
// //if you do 1,3 it will do numbers between 1 and 3 giving you 4,15 etc.
// let slicedNum = numbers.slice(1)
// let numbers2 = [
//     1,
// ]
// numbers2 = numbers2.concat(slicedNum);

// console.log(numbers2);
// numbers.splice(5)
// console.log(numbers)

let numbers2 = [
    18,
    36,
    54,
    72,
    90
]
let mergedArray = numbers2.concat(numbers)

console.log(`These are the concatenated arrays, ${mergedArray}`)