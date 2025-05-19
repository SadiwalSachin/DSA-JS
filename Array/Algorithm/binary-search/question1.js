//5️⃣ Search in a Rotated Sorted Array
// 👉 Problem: You are given a sorted and rotated array. Find the index of a given target.

let arr = [4,5,6,7,0,1,2]
let target = 0

function searchRotatedArray(arr, target){
    let start  = 0;
    let end = arr.length -1;

    while(start<=end){
        let mid = Math.floor(start + (end - start)/2)

        if(arr[mid]==target){
            return mid
        }else if(arr[start] <= arr[mid]){ // left sorted
            if(arr[start]<=target && target<=arr[mid]){
                end = mid-1
            }else {
                start = mid + 1
            }
        }else{ // right sorted
            if(arr[mid] <= target && target <=arr[end]){
                start = mid + 1
            }else{
                end = mid -1
            }
        }
    }

    return -1
}



console.log(searchRotatedArray(arr,target));
