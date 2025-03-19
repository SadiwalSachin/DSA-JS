// 8️⃣ Find the Smallest Element Greater than Target (Upper Bound)
// *? 👉 Problem: Find the smallest element in a sorted array that is strictly greater than a target.
// ✅ Example:

// Input: arr = [2, 3, 5, 7, 11], target = 5  
// Output: 7 Smallest number greater than 5

let arr = [2, 3, 5, 7, 11]
let target =  5

function smallestElemetGreaterThanTarget(arr,target){
    let start = 0;
    let end  =  arr.length - 1

    while(start <= end){
        let mid  = Math.floor(start + (end - start)/2)
        if(arr[mid]==target){
            return arr[mid+1]
        } else if(target>arr[mid]){
            start = mid +1
        } else {
            end = mid - 1
        }
    }

    return -1
}

console.log(smallestElemetGreaterThanTarget(arr,target));
