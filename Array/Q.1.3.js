// filter the number divisible by 10 in a given array

const prompt = require('prompt-sync')()

let arr=[]
let n,i=0
while(i<5)
{
    n=parseInt(prompt("Enter a number:"))
    arr.push(n)
    i++
}
let newArr=arr.filter((x)=>{
    return x%10==0
})
console.log(newArr)