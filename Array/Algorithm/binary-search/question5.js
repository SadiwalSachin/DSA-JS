// Peak index in mountain array

function findPeakIndexInMountainArray(arr){
    let start = 0;
    let end = arr.length -1;

    while(start<=end){
        let mid = Math.floor(start + (end-start)/2)
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) return mid

        if(arr[mid-1]<arr[mid]){
            start = mid+1
        }else{
            end = mid -1f
        }
    }
}