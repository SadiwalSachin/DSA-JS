function printNum(n){
    if(n==0){
        console.log(1);
        return 1
    }
    return n*printNum(n-1)
}
 
console.log(printNum(5)) 