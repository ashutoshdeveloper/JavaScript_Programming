// Write a program to take input from prompt function of age as a value from the user and use alert  to tell him he can drive ?

const prompt = require('prompt-sync')
let age;
age =parseInt(prompt('enter your age'))

if(age<18 && age>=0)
{
    alert("You are not aligible for driving")
}
elseif(age<0)
{
    alert("Enter a valid age")

}
    

