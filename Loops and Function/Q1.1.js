// type a code to print the mark of a student in an object using for in loop

let obj={
    ashu:90,
    rohan:39,
    rohit:99
}
for(let items in obj){
    console.log(`${items} has ${obj[items]} marks`,typeof(obj[items]))
}