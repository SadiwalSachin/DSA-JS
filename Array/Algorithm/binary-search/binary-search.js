let arr1 = [-1,0,3,4,5,9,12] // even array
const target1 = 50

let arr2 = [-1,0,3,4,9,12] // odd array
const target2 = 12

function binarySearch(array,target){
    let start = 0;
    let end = array.length-1
    while(start<=end){
        let mid = Math.floor( start + (end-start)/2)
        if(target > array[mid]){
            start = mid + 1
        } else if(target < array[mid]){
            end = mid-1
        } else {
            return mid
        }
    }

    return -1
}

// console.log(binarySearch(arr2,target2))
// console.log(binarySearch(arr1,target1))
// console.log(5/2);

console.log(findFirstAndLastOccurence(arr,target))
