const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

 fs.readFile('./student.json',(err, data)=>{
    if(err){ throw err}
    let student = JSON.parse(data)
    let arr = parseInt(process.argv.slice(2))
    if(isNaN(arr)=== true){
        console.log("Age should be a number")
    }
    student.age = arr
    console.log(student)
    fs.writeFile('./result.txt', JSON.stringify(student), (err)=>{
        if(err){ throw err}
    })
})





app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})