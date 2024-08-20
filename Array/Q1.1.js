// create an array of numbers and take inputs from the user to add numbers to the array

const prompt = require('prompt-sync')();

// while using nodeJs or in some browser we have to include prompt as an  external module 
// for nodeJs - (npm install prompt-sync)

let arr=[1,5,32,6,211]
let n
n=parseInt(prompt("Enter a number you want to add:"))
arr.push(n)
console.log(arr)