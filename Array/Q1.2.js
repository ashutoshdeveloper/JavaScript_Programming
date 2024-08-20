// keep adding the numbers in an array until the input number become 0
const prompt = require('prompt-sync')()
let arr=[]
let n
while(n!=0)
{
    n=parseInt(prompt("Enter a number:"))
    arr.push(n)
}
console.log(arr)