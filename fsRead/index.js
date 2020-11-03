const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

 fs.readFile('./a.txt', 'UTF-8', (err, data)=>{
    if(err){ throw err}
    console.log(data)
    fs.appendFile('./result.txt', data, (err)=>{
        if(err){ throw err}
    })
});


 fs.readFile('./b.txt', 'UTF-8', (err, data)=>{
    if(err){ throw err}
    console.log(data);
    fs.appendFile('./result.txt', data, (err)=>{
        if(err){ throw err}
    })    
});

fs.readFile('./c.txt', 'UTF-8', (err, data)=>{
    if(err){ throw err}
    console.log(data);
    fs.appendFile('./result.txt', data, (err)=>{
        if(err){ throw err}
    }) 
});


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})