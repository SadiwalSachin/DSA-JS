//  THIS WAS BRUTE FORCE APPROACH WHICH HAS O(n^2) TC 
const arr =[3,1,2,4]
// let min = []

// function getSubarray(arr){ // O(n^2)
//     for(let i=0;i<arr.length ; i++){
//         for(let j=i;j<arr.length;j++){
//             // it will give all the subarray            
//             min.push(getMinOfSubArray(arr,i,j))
//         }
//     }
// }

// function getMinOfSubArray(arr,start,end){
//     let min = arr[start];
//     for(let i = start;i<=end;i++){
//         // console.log(arr[i] ,"\n");
//         if(arr[i]<min){
//             min = arr[i]
//         }
//     }
//     return min
// }

// function getSum(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum
// }



// getSubarray(arr)
// getSum(min)
// let finalAns = getSum(min) 
// console.log(arr);
// console.log(min);
// console.log(finalAns);

// MORE OPTIMIZE BRUTE FORCE APPROACH

let sum  = 0;
let mod = 10^9 + 7
for(let i=0;i<arr.length;i++){
    let min = arr[i]
    for(let j=i;j<arr.length;j++){
        min = Math.min(min,arr[j])
        sum = (sum + min) % mod
    }
}

// console.log(sum);

// MOST OPTIMAL SOLUTION WITH TC OF O(n)

function getNextSmaller(arr){
    let nextSmallerArray = [] // it will store the indexes
    let stack = [] 
    for(let i = arr.length-1;i>=0;i--){
        while(stack.length>0 && arr[stack[stack.length-1]]>=arr[i]){
            stack.pop()
        }
        nextSmallerArray[i] = stack.length == 0 ? arr.length :  stack[stack.length -1]
        stack.push(i)
    }

    return nextSmallerArray
}

function getPrevSmaller(arr){
    let prevSmallerArray = []
    let stack = []

    for(let i =0;i<arr.length;i++){
        while(stack.length>0 && arr[stack[stack.length - 1]]>arr[i]){
            stack.pop()
        }

        prevSmallerArray[i] = stack.length == 0 ? -1 : stack[stack.length - 1]
        stack.push(i)
    }

    return prevSmallerArray
}

// console.log(getNextSmaller(arr));
// console.log(getPrevSmaller(arr));


function findNextSmaller(arr){
    const nextSmaller = getNextSmaller(arr)
    const prevSmaller = getPrevSmaller(arr)
    let total = 0
    for(let i =0;i<arr.length;i++){
        let left = i - prevSmaller[i]
        let right = nextSmaller[i] - i
        total = total + left*right*arr[i]
    }
    return total
}

console.log(findNextSmaller(arr))


