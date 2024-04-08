// console.log(`loops!`)

// let favDrinks= [
//     `iced coffee`,
//     `oasis`,
//     `coke`
// ]

// for (let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i])
// }
// // for (initalexpression; CSSConditionRule; increment/decrementexpression){
// //     //dostuff
// // }

// let multiplesOfTwo= []

// for (let i = 0; i < 20; i++){
//     if(i % 2 == 0){
//         multiplesOfTwo.push(i)
//     }
// }
// console.log(`numbers divisible by 2 are ${multiplesOfTwo}`)


// let multiplesOfTwoAndThree= []

// for (let i = 0; i < 20; i++){
//     if(i % 2 == 0 && i % 3 == 0){
//         multiplesOfTwoAndThree.push(i)
//     }
// }
// console.log(`numbers divisible by 2 and 3 are ${multiplesOfTwoAndThree}`)


// let age = 15

// while (age<18) {
//     console.log(`you're a child at ${age} years old`)
//     age++
// }
// console.log (`You are an adult at ${age}`)

// let cards = ["diamond", "spade", "heart", "club"]
// let currentCard= "club"
// //Without math.floor, it will give a random interger such as 2.324258724923
// // floor rounds it down so it will be between 0 and 4.
// while (currentCard != "spade"){
//     console.log(currentCard)
//     currentCard = cards[Math.floor(Math.random()*4)]
// }

// console.log (currentCard)

//chall 1
// let favFilms = [`Drive`, `Revenge Of The Sith`, `Godzilla 2014`, 
//  `Dragonball Super - Broly `, `The Grey Man`]

// favFilms.push(`Bullet Train`,`The Gentlemen`)
// for (let i = 0; i < favFilms.length; i++){
//         console.log(favFilms[i])
// }

//chall 2
// let ranNum = []
// for (let i = 0; i < 6; i++){
//     ranNum.push(Math.ceil(Math.random()*50))
// }
// console.log(ranNum)

//chall 3
// let nineToZero = []
// for (let i = 9; i >= 0; i--) {
//     nineToZero.push(i)
// }
// console.log(nineToZero)

//Chall 4
// let favFilms = [
//     'Drive',
//     'Revenge Of The Sith',
//     'Godzilla 2014',
//     'Dragonball Super - Broly',
//     'The Grey Man'
// ];

// for (let i=0; i< favFilms.length; i++){
//     if (i=== 2 && favFilms[1] === `Ghostbusters`){
//     console.log("Yay, its's Ghostbusters!")
// }  else if (i === 2) {
//     console.log("Boo, we want Ghostbusters!");
// }
// }

//chall 5
// let ranNum = []
// for (let i = 0; i < 3; i++) {
//     let randomNumber = Math.ceil(Math.random() * 50);
//     ranNum.push(randomNumber);
    
//     if (randomNumber % 7 === 0) {
//         console.log(randomNumber + " is divisible by 7.");
//     } else {
//         console.log(randomNumber + " is not divisible by 7.");
//     }
// }

// console.log("the generated numbers are ", ranNum)

//Chall 6
// let bobsFollowers = [
//     `NorthernGamer`,
//     `AlbinoMage`,
//     `HanksAdventures`,
//     `Tottington`
// ]
// let hannahsFollowers = [
//     `NorthernGamer`,
//     `Tottington`,
//     `LB97102`,
//     `DAYMAN`
// ]
// for (let i=0; i < bobsFollowers.length; i++){
//     for (let q=0; q < hannahsFollowers.length; q++){
//         if(bobsFollowers[i] === hannahsFollowers[q]){
//             console.log(`Matching Follower`, bobsFollowers[i])
//         }
//     }
// }