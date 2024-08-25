// redirect the page to youtube.com when the user enter a number which is greater then 4
const url= require('url')
const myURL = new URL("https://www.youtube.com/")
const prompt = require('prompt-sync')()
let num=parseInt(prompt("enter a number: "))
if(num<4)
{
    console.log("Thank You")
}else{
    myURL.href="https://www.youtube.com/"
}