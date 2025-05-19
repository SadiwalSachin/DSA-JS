
function printFibonacii(n){
    if(n==0 || n==1){
        return n;
    }

    return  printFibonacii(n-1) + printFibonacii(n-2)
}

console.log(printFibonacii(3))