// brute force approach 

let array = [3,-4,5,4,-1,7,-8]

// printing all the subarray

/*
for(let start = 0; start<array.length; start++){
    for(let end = start ; end<array.length ; end++){
        console.log(`Sub array start with starting index ${start} and end with ending index ${end}`);
        for(let i=start;i<=end;i++){
            this loop is printing the subarray
            console.log(array[i]);
        }
    }
}
*/


/*
let maximumSum = 0;
let maximumSumArray = []

for(let start = 0; start<array.length;start++){
    for(let end = start;end<array.length;end++){
           console.log(`Sub array start with starting index ${start} and end with ending index ${end}`);
        for(let i=start;i<=end;i++){
            this loop will calculate the sum of subarrays
            maximumSum+=array[i]
        }
        maximumSumArray.push(maximumSum)
        maximumSum = 0
    }
}
let maximumSumInSubArray = Number.NEGATIVE_INFINITY
for(let i = 0;i<maximumSumArray.length;i++){
    if(maximumSumArray[i]>maximumSumInSubArray){
        maximumSumInSubArray = maximumSumArray[i]
    }
}

console.log(maximumSumArray);
console.log(`The maximum subarray sum is ${maximumSumInSubArray}`);

*/

/*

 * !Some how more optimized brute force approach

let maxSum = Number.NEGATIVE_INFINITY

for(let start = 0; start <array.length;start++){
    let currentSum = 0;
    for(let end = start ;end<array.length;end++){
        currentSum +=array[end]
        if(currentSum>maxSum){
            maxSum = currentSum
        }
    }
}

console.log(`The maximum subarray sum is ${maxSum}`);

*/

// Most optimized approach which is kadans algorithm 

let currentSum = 0;
let maximumSum = Number.NEGATIVE_INFINITY

for(let start = 0 ; start < array.length ; start ++ ){
    currentSum+=array[start]
    if(currentSum>maximumSum){
        maximumSum = currentSum
    }
    if(currentSum<0){
        currentSum=0
    }
}

console.log(`Maximum subarray sum from kadanes algo is ${maximumSum}`);
