const express = require('express');
const fs = require('fs');

const app = express();

let data = []

let readerStream = fs.createReadStream('./student.json');
let writerStream = fs.createWriteStream('./output.txt');


readerStream.on('data', function(chunk) {
    data += chunk

 });
 
 readerStream.on('end',function() {
    let newData = JSON.parse(data)
    let arr = Number(process.argv.slice(2));
    if(isNaN(arr)=== true){
        console.log('Age should be a number')
    }
    console.log(arr)
    newData.age = arr
    console.log(newData);
    writerStream.write(JSON.stringify(newData));
    writerStream.end();
    writerStream.on('finish', function() {
     console.log("Write completed.");
    });
    writerStream.on('error', function(err) {
     console.log(err.stack);
    });


 });
 
 readerStream.on('error', function(err) {
    console.log(err.stack);
 });



const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})