
function mergeSort(arr,start,end){
    if(start<end){
        let mid = Math.floor(start + (end-start)/2)
        mergeSort(arr,start,mid)
        mergeSort(arr,mid+1,end)
        merge(arr,start,mid,end)
    }
}

function merge(arr,st,mid,end){
    let tempArr =[]
    let i=st
    let j=mid+1

    while(i<=mid && j<=end){
        if(arr[i]<arr[j]){
            tempArr.push(arr[i])
            i++
        } else {
            tempArr.push(arr[j])
            j++
        }
    }

    while(i<=mid){
        tempArr.push(arr[i])
        i++
    }

    while(j<=end){
        tempArr.push(arr[j])
        j++
    }

    for(let index =0;index<tempArr.length;index++){
        arr[st+index] = tempArr[index]
    }
}

let array  = [12,31,35,8,32,17,3,90]

console.log(`Array before sorting ${array}`);

mergeSort(array,0,array.length-1)

console.log(`Array after sorting ${array}`);
