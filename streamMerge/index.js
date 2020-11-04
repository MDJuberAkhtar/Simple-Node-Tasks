const express = require('express');
const fs = require('fs');

const app = express();

let dataA = [];
let dataB =[];

let readerStreamA = fs.createReadStream('./a.json');
let writerStream = fs.createWriteStream('./output.txt');

let readerStreamB = fs.createReadStream('./b.json');


readerStreamA.on('data', function(chunk) {
    dataA += chunk

 });
 
 readerStreamA.on('end',function() {
    let newDataA = JSON.parse(dataA)
    console.log(newDataA);
    let statusA = newDataA.status;
    let totalA = newDataA.total;

    readerStreamB.on('data', function(chunk) {
        dataB += chunk
    
     });

     readerStreamB.on('end', function(){
        let newDataB = JSON.parse(dataB)
        console.log(newDataB);
        let statusB = newDataB.status;
        let totalB = newDataB.total;
        let myObj = {[statusA]: totalA, [statusB]: totalB};

         writerStream.write(JSON.stringify(myObj));
         writerStream.end();
         writerStream.on('finish', function() {
          console.log("Write completed.");
         });
        writerStream.on('error', function(err) {
         console.log(err.stack);
        });
     })

     readerStreamB.on('error', function(err) {
        console.log(err.stack);
     });
   
 });
 
 readerStreamA.on('error', function(err) {
    console.log(err.stack);
 });



const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})