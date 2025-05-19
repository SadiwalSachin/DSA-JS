
// recursive function that print no from n to 1 in reverse fashion
function printNum(num){
    if(num === 1){ // base case
        console.log("1");
        return
    }
    console.log(`${num} `); // the small problem that function is solving
    printNum(num-1) // calling it self for rest of the problem
}

// printNum(100)

// CALCULATE FACTORIAL WITH RECURSION

function findFactorial(n){
    if(n===0){
        return 1;
    } 

    return n * findFactorial(n-1)
}

// console.log(findFactorial(5));


function sum(n){

    if(n==1) return 1;

    return n + sum(n-1)
}

console.log(sum(4))