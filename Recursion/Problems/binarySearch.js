let array  = [-1,0,3,5,9,12]

target = 9

function binarySearch(arr,target,st,end){
    if(st<=end){
        mid = Math.floor((st + (end-st)/2))
        if(arr[mid]==target) return mid
        else if(arr[mid]<target){
            return binarySearch(arr,target,mid+1,end)
        } else if(arr[mid]>target){
            return binarySearch(arr,target,st,mid-1)
        }
    }
    return -1
}

console.log(binarySearch(array,target,0,array.length-1))