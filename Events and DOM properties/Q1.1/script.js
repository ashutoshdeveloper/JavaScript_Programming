// show different alerts when different buttons are clicked

const btn1=document.getElementById("btn1")
btn1.addEventListener('click',function(){
    document.body.style.backgroundColor="RED"
    alert("ARE YOU SURE")
})
const btn2=document.getElementById("btn2")
btn2.addEventListener('click',function(){
    document.body.style.backgroundColor="lightblue"
    alert("ARE YOU SURE")
})
const btn3=document.getElementById("btn3")
btn3.addEventListener('click',function(){
    document.body.style.backgroundColor="green"
    alert("ARE YOU SURE")
})
const btn4=document.getElementById("btn4")
btn4.addEventListener('click',function(){
    document.body.style.backgroundColor="purple"
    alert("ARE YOU SURE")
})