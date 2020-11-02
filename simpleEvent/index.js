const express = require('express');
const events = require('events');

const app = express();

const myEvent =new events.EventEmitter();


function something(){
    console.log('Hello from the other side!')
}


myEvent.on('reg', something);

setInterval(() => {
    myEvent.emit('reg');   
}, 5000);



const PORT =3000;
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})