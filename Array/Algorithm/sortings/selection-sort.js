let array = [4,1,5,2,3]


function selectionSortForAscendingOrder(array,length){
    for(let i = 0 ; i < length - 1 ; i++){
        let smallestIndex = i; // unsorted part starting index
        let smallestElement;
        for(let j =i +1 ; j <length;j++){
            if(array[j]<array[smallestIndex]){
                smallestIndex = j 
            }
        }
        // smallestIndex wali value ko 0th index par daalo and 0th index wali value ko j wale index par daalo
        smallestElement = array[smallestIndex] // smallest index wali value
        array[smallestIndex] = array[i] // smallestIndex par 0th index walli value daali
        array[i] = smallestElement // 0th index par smallest value
    }
}

// console.log(`Array before sorting ${array}`);
// selectionSortForAscendingOrder(array,array.length)  
// console.log(`Array after sorting ${array}`);


function selectionSortForDescendingOrder(arr,length){
    for(let i=0;i<length-1;i++){
        let largestIndex = i
        let largestElement;
        for(let j =i+1;j<length;j++){
            if(arr[largestIndex]<arr[j]){
                largestIndex = j
            }
        }
        largestElement = arr[largestIndex]
        arr[largestIndex] = arr[i]
        arr[i] = largestElement
    }
}

console.log(`Array before sorting ${array}`);
selectionSortForDescendingOrder(array,array.length)
console.log(`Array after sorting ${array}`);

