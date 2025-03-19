let array = [4,1,5,2,3]
let tempElement;

// ASCENDING ORDER
function bubbleSortForAscending(arr,length){ // Time Complexity is O(n^2)

    for(let i = 0 ; i < length - 1 ; i++ ){

        for(let j = 0;j < length - i-1 ; j++){ //  perform comparison

            if(arr[j]>arr[j+1]){

                tempElement = arr[j]

                arr[j] = arr[j+1]

                arr[j+1] = tempElement
            }
        }
    }
}

// console.log(array); 
// bubbleSortForAscending(array,array.length)
// console.log(array);

// still the bubble sort work on sorted array but this is not optimized so we do somehow optimization in our code but still the time complexity will be O(n^2) but we will not perfrom the checks

function someOptimizedBubbleSort(arr,length){
    let tempElement;
    
    for(let i = 0 ; i < length - 1 ; i++){
        let isSwap = false;

        for(let j = 0 ; j < length - i - 1 ; j++){
            if(arr[j]>arr[j+1]){
                tempElement = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tempElement
                isSwap = true
            }
        }

        if(!isSwap){ // array is already sorted but in the rare cases where the array is sorted we do not perform more checks
            return
        }
        
    }
}

function bubbleSortForDescending(arr,length){
    let tempElement;
    for(let i=0;i<length-1;i++){ // traversing on whole array
        for(let j =0;j<length-i-1;j++){ // this loop is performing comparison
            if(arr[j]<arr[j+1]){
                tempElement = arr[j+1]
                arr[j+1]=arr[j]
                arr[j] = tempElement
            }
        }
    }
}

// console.log(`Array before bubble sort for descending order ${array}`);
// bubbleSortForDescending(array,array.length)
// console.log(`Array after bubble sort for descending order ${array}`);

function someOptimizedBubbleSortForDescending(arr,length){
    let tempElement;
    for(let i =0;i<length-1;i++){
        let isSwap = false;
        for(let j=0;j<length-i-1;j++){
            if(arr[j]<arr[j+1]){
                tempElement = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tempElement
                isSwap = true
            }
        }

        if(!isSwap){
            console.log("Array is already sorted in descending order");
            return "Array is already sorted in descending order"
        }
    }
}

console.log(`Array before bubble sort for descending order ${[5,4,3,2,1]}`);
someOptimizedBubbleSortForDescending([5,4,3,2,1],5)


