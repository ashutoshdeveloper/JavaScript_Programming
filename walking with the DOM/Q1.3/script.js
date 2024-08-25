//  write a javacript code to change all the background color of li tags to cyan

// method -1
// const items= document.querySelectorAll("li")

// items.forEach((elm)=>{
//     elm.style.color = "red"
// })


// method -2
const items = document.getElementsByTagName("li")
console.log(items)
Array.from(items).forEach(element => {
    element.style.background = "cyan" 
});

// forEach only apply in array so we need to convert the items to an array