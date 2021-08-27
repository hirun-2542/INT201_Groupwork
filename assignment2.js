function randomNum(min,max){
    return Math.floor(Math.random() * (max-min +1 ) + min);
}

function findSum(arr){
    let sum = 0;
    for (let i = 0 ; i < arr.length; i++ ) 
        sum += arr[i];
    return sum;    
}

function findMin(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(min > arr[i])
        min = arr[i];
  }
    return min;
}

function findMax(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if(max < arr[i])
        max = arr[i]
    }
     return max;
}

function menu(select){
    let arr = [randomNum(1,100), randomNum(1,100), randomNum(1,100)] ;
    let result = null;
    switch(select){
        case 1 : result = findSum(arr); break;
        case 2 : result = findMin(arr); break;
        case 3 : result = findMax(arr); break;
        default : result = null;
    }
    return {"Select Menu ": select, "Random Number ": arr, "Result ": result};
}

console.log(menu(1))
console.log(menu(2))
console.log(menu(3))