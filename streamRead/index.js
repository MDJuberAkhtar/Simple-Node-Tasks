const express = require('express');
const fs = require('fs');
const app = express();

let data='';
let outData = 'Simply Easy Learning';

let readStream = fs.createReadStream('./input.txt');
readStream.setEncoding('UTF8');

readStream.on('data', function(chunk){
    data+=chunk
});

readStream.on('end',function() {
    console.log(data);
});
 
 readStream.on('error', function(err) {
    console.log(err.stack);
});

let writeStream = fs.createWriteStream('./output.txt');

writeStream.write(outData, 'utf-8');

writeStream.end();

writeStream.on('finish', function(){
    console.log('write complete')
});

writeStream.on('error', function(){
    console.log(err.stack);
})





const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})