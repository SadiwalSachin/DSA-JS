
let arr = [4,1,5,2,3]

function bubbleSort(array){
    for(let i=0;i<array.length -1;i++){
        for(let j= 0;j<array.length- i -1;j++){
            if(array[j]>array[j+1]){
                let ele = array[j] // j bigger
                array[j] = array[j+1]
                array[j+1] = ele
            }
        }
    }
}

console.log(`Array before sorting ${arr}`);
bubbleSort(arr)
console.log(`Array after sorting ${arr}`);

