const express = require('express');
const fs = require('fs');
const app = express();

let readerStreamA = fs.createReadStream('./a.txt');
let readerStreamB = fs.createReadStream('./b.txt');
let readerStreamC = fs.createReadStream('./c.txt');

let writerStream = fs.createWriteStream('./output.txt');

readerStreamA.pipe(writerStream);
readerStreamB.pipe(writerStream);
readerStreamC.pipe(writerStream);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})