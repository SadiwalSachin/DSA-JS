let array = [1,2,3,4,5,6]


function isSorted(array,n){
    if(n==0 || n==1){
        return true
    }

    return array[n-1] >= array[n-2] && isSorted(array,n-1)
}

console.log(isSorted(array , array.length))