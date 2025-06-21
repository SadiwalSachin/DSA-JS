// rotate array by one

let array = [1, 2, 3, 4, 5]

function rotateArrayByOne(arr){
    let leftElement = arr[0]

    for(let i =0;i<arr.length;i++){
        if(i == arr.length-1){
             arr[i] = leftElement
        }else {
            arr[i] = arr[i+1]
        }
    }

    return arr
}

function rotateHelper(arr,start,end){
    while(start<end){
        let tempElement = arr[start]
        arr[start] = arr[end]
        arr[end] = tempElement
        start++
        end--
    }
}

function rotateArrayByK(arr,k){
    let start = k;
    if(k>arr.length){
        start = k - arr.length
    }

    rotateHelper(arr,0,start-1)
    rotateHelper(arr,start,arr.length-1)
    rotateHelper(arr,0,arr.length-1)

}

rotateArrayByK(array,3)
console.log(array);


