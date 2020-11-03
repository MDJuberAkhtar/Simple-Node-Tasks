const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

 fs.readFile('./a.json',(err, data)=>{
    if(err){ throw err}
    let aData = JSON.parse(data)
    let statusA = aData.status;
    let totalA = aData.total;
    fs.readFile('./b.json', (err, data)=>{
        if(err){ throw err }
        let bData = JSON.parse(data)
        let statusB = bData.status;
        let totalB = bData.total;
        
        let myObj = {[statusA]: totalA, [statusB]: totalB};

        fs.writeFile('./result.txt',JSON.stringify(myObj), (err)=>{
            if(err){ throw err}
        })
    })
   
})


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})