// Write a program to take input from prompt function of age as a value from the user and use alert  to tell him he can drive ?

const prompt = require('prompt-sync')()
let age;
let a;
do {
    age =parseInt(prompt('enter your age: '))
    
    if(age<18 && age>=0)
    {
        console.log("You are not aligible for driving")
    }
    else if(age<0)
    {
        console.error('Enetr a Valid age')
    }
    else{
        console.log("You are aligible for driving")
    } 
    console.log('press Y for continue')
    a=prompt()
} while (a=='y' || a=='Y');
console.log('Thank You')

