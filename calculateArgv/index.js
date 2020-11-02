var result = 0;
var sum = 1;
const arr = process.argv.slice(2)
const lastValue = arr.pop().toLowerCase()
console.log(lastValue)

if(lastValue === 'add'){
    for (let i = 0; i < arr.length; i++){
        result += Number(arr[i]);
    }
    
    if(isNaN(result) === true){
        console.log('We Cannot Add')
    } else if(isNaN(result) === false){
        console.log(result)
    }
}else if(lastValue === 'sub'){
    for (let i = 1; i < arr.length; i++){
        result = Number(arr[0])
        result -= Number(arr[i])
    }
    
    if(isNaN(result) === true){
        console.log('We Cannot Divide')
    } else if(isNaN(result) === false){
        console.log(result)
    }
}else if(lastValue === 'mul'){
    for (let i = 0; i < arr.length; i++){
        sum *= Number(arr[i])
    }
    
    if(isNaN(sum) === true){
        console.log('We Cannot multiply')
    } else if(isNaN(sum) === false){
        console.log(sum)
    }
} else{
    console.log('Sorry no valid data')
}