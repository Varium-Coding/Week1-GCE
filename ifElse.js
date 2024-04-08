// let password = false

// if (password == true) {
//     console.log("Password is true")
// } else {
//     console.log("Password Incorrect")
// }


// let num = 15

// if (num == "1"){
//     console.log ("Same Value")
// } else {
//     console.log("not same value")
// }


// if (num != "1") {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let num = 15
// if  (num > 10){
//     console.log("It is less than 10")
// } else {
//     console.log("It is greater than 10")
// }

// if  (num < 10){
//     console.log("It is greater than 10")
// } else {
//     console.log("It is less than 10")
// }

// if  (num >= 10){
//     console.log("It is greater or equal to 10 ")
// } else {
//     console.log("it is less than 10")
// }

// if  (num <= 10){
//     console.log("It is less than or equal to 10 ")
// } else {
//     console.log("it is greater than 10")
// }



// let age = 17
// let drinkingAge = 18

// if (age >= drinkingAge){
//     console.log("You are legally allowed to drink!")
// } else {
//     console.log("You aint old enough to buy these, get out of here McLovin")
// }

// let weather = ("rainy")

// if (weather == "overcast"){
//     console.log("The weather is currently overcast")
// } else if (weather == "sunny"){
//     console.log("Yea neymar sunny innit")
// } else if (weather == "rainy"){
//     console.log("The weather is rainy and pouring it down")
// }


// let newWord = "football is great"

// if(newWord.length >= 4 && newWord.length <= 10){
//     console.log(`${newWord} is between 4 and 10 characters`)
// }else {
//     console.log (false)
// }


// let age = 19
// let drinkingAge = 17
// let country = "UK"
// if (age > drinkingAge && country == "UK"){
//     console.log("Yes, I can serve you")
// } else {
//     console.log("You arent old enough")
// }

// let pizzaTopping = "Pepperoni";
// switch (pizzaTopping) {
//     case "Pepperoni":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "This is one of my favourite toppings":
//         console.log(`I dont mind having ${pizzaTopping} on my pizza`);
//         break;
//     default:
//         console.log(`${pizzaTopping} should not be on a pizza`);
// }


// let password = "Password123"
// if(password.length < 8){
//     console.log(`Password is too short`)
// }else if (password.length >= 8){
//     console.log(`${password} accepted`)
// }

// let num = 15;

// if (num % 3 === 0 || num % 5 === 0) {
//     console.log("This number is divisible by 3 or 5");
// } else {
//     console.log("This number is not divisible by 3 or 5");
// }

// let num = 15;

// let num = 6;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Fizz buzz")
// } else if (num % 3 === 0) {
//     console.log("Fizz")
// } else if (num % 5 === 0) {
//     console.log("Buzz")
// }

// const number = 7007;
// const numString = number.toString();
// const reversedString = numString.split('').reverse().join('');

// if (numString === reversedString) {
//     console.log(`${number} is a palindrome.`);
// } else {
//     console.log(`${number} is not a palindrome.`);
// }

let numb = 100

if (numb <= 101 && numb % 5 === 0){
    console.log("This number is less than 101 or not equal to 101, and divisible by 5")
} else {
    console.log(`This number does not fit both criteria of being less than 
    101 and divisible by 5 `)
}
