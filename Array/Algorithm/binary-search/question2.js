// Find First and Last Occurrence of an Element
// 👉 Problem: Given a sorted array and a target element, find the first and last index of the target. If not found, return [-1, -1]

let arr = 	[5]
let target = 5

function findFirstOccurence(arr,target){
    let start = 0;
    let end  = arr.length - 1;
    let firstIndex = -1;

    while(start<=end){
        let mid = Math.floor(start + (end - start)/2)
        if(target>arr[mid]){
            start = mid + 1;
        } else if(target < arr[mid]){
            end = mid -1
        } else {
            firstIndex = mid
            end = mid -1
        }
    }
    return firstIndex
}

function findLastOccurence(arr,target){
    let start = 0;
    let end =  arr.length - 1;
    let lastIndex = -1;

    while(start<=end){
        let mid = Math.floor(start + (end-start)/2)

        if(target>arr[mid]){
            start = mid +1
        } else if(target < arr[mid]){
            end= end -1
        } else {
            lastIndex = mid
            start = mid + 1
        }
    }
    return lastIndex
}

function findFirstAndLastOccurence(arr,target){
    let firstIndex = findFirstOccurence(arr,target)
    let lastIndex = findLastOccurence(arr,target)

    return [firstIndex,lastIndex]
}