
var result = 0;
const arr = process.argv.slice(2)

  for (let i = 0; i < arr.length; i++){
    result += Number(arr[i]);
}

if(isNaN(result) === true){
    console.log('We Cannot Add')
} else if(isNaN(result) === false){
    console.log(result)
}


  

