let array = [4,1,5,2,3]


function insertionSortForAscending(array,length){
    for (let i = 1; i < length; i++) {
        let current = array[i]
        let prev = i - 1
        
        while(prev >= 0 && array[prev] > current){
             array[prev + 1] = array[prev]
             prev --;
        }
        array[prev+1] = current
    }
}

console.log(`Array before sorting ${array}`);
insertionSortForAscending(array,array.length)
console.log(`Array after sorting ${array}`);
