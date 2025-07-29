

function selectionSort(array){
    let n =array.length

    for(let i=0;i<n-1;i++){
        let smallestIndex = i
        let smallestElement = array[i]
        for(let j=i+1;j<n-1;j++){
            if(array[j]<array[smallestIndex]){
                smallestIndex = j
            }
        }
        array[i] = array[smallestIndex]
        array[smallestIndex] = smallestElement
    }
}

let arr = [4,1,5,3,2,8]

console.log(`Array before sorting ${arr}`);
selectionSort(arr)
console.log(`Array before sorting ${arr}`);
