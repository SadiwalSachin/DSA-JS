// Subarray : Subarray is a continues part of an given array if n elements are there in an array then
// the total subarray will be (n*(n+1))/2

// let arr = [3,-4,5,4,-1,7,-8]
// let sum = 0;
// let summationArray  = []

// for(let start = 0 ; start < arr.length ; start ++){
//     for(let end  = start ; end < arr.length ; end ++){
//         for(let i = start ; i <= end ; i++){ // this print an single subarray
//             sum+= arr[i]
//         }
//         summationArray.push(sum)
//         sum = 0
//     }
// }

// let largestSum = 0 ; 

// for(let i = 0 ;i<summationArray.length ;i++){
//     if(largestSum > summationArray[i]){
//         largestSum
//     } else {
//         largestSum = summationArray[i]
//     }
// }

// console.log(summationArray);

// console.log("Largest sum in the array will be :- ",largestSum);

// OPTIMISED BRUTE FORCE APPROACH

// let arr = [3,-4,5,4,-1,7,-8]
// let maxSum = 0
// for (let start = 0 ; start < arr.length ; start++){
//     let currentSum = 0    
//     for(let end =  start ; end < arr.length ; end ++){
//         currentSum+=arr[end]
//         if(maxSum>currentSum){
//             maxSum
//         } else {
//             maxSum = currentSum
//         }
//     }
// } 

// console.log(maxSum );

// KADANE'S ALGORITHM

// let array = [-2,1,-3,4,-1,2,1,-5,4]
// let currentSum = 0;
// let maxSum = 0;

// for( let i = 0 ; i < array.length ; i++ ){
//     currentSum+=array[i]
//     if(currentSum>maxSum){
//         maxSum =  currentSum;
//     }
//     if(currentSum < 0) 
//         currentSum = 0
// }

// console.log("The maximun sub array sum of the array is :- ",maxSum);


let array = [3,-4,5,4,-1,7,-8]
// let summationArray = []
// let maxSum = Number.NEGATIVE_INFINITY
// for(let start = 0 ; start<array.length;start++){
//     let currentSum = 0
//     for(let end = start;end<array.length;end++){
//         currentSum += array[end]
//         if(currentSum>maxSum){
//             maxSum=currentSum
//         }
//     }
// }

// console.log("The max sum of an subarray from the given array is :-",maxSum);






// to print all the sub arrary

// for(let i=0;i<array.length;i++){ // this gives starting position to us
//     for(let j = i;j<array.length;j++){ // ye saare sub-array dega
//         console.log(`Sub-array start with starting indesx ${i} and end with ending index ${j}`);
//         for(let start = i ;start<=j;start++){
//             console.log(array[start]);
//             console.log(" ");
//         }
//     }
// }

let currentSum = 0
let maxSum = Number.NEGATIVE_INFINITY

for(let i=0;i<array.length;i++){ // this gives starting position to us
    currentSum += array[i]
    if(currentSum>maxSum){
        maxSum = currentSum
    }
    if(currentSum<0){
        currentSum=0
    }

    
}

console.log(`From the most optimized approach which is kadane's you get the answer that maximum sum is ${maxSum}`);






