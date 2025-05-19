let array = [2,0,2,1,1,0,1,2,0,0]



// some optimal approach

function someOptimalApproach(array){

    let totalCount = {
        "0s":0,
        "1s":0,
        "2s":0
    }

    for(let i = 0;i<array.length;i++){
        if(array[i] === 0){
            totalCount["0s"]++
        }
        if(array[i] === 1){
            totalCount["1s"]++
        }
        if(array[i] === 2){
            totalCount["2s"]++
        }
    }
    
    let index=0
    
    for(let i=0;i<totalCount?.["0s"];i++){
        array[index]= 0
        index++
    }
    
    for(let i=0;i<totalCount?.["1s"];i++){  
        array[index]= 1
        index++
    }
    
    for(let i=0;i<totalCount?.["2s"];i++){
        array[index]= 2
        index++
    }
}


// console.log(`Array before some optimal approach ${array}`);
// console.log(`Array after sorting from some optimal approach ${array}`);


// These are brute force approach or less than the brute force approach because of O(n^2)
function bubbleSortFor0s1s2s(array,length){
    let tempElement;
    for(let i=0;i<length-1;i++){
        for(let j=0;j<length-i-1;j++){
            if(array[j]>array[j+1]){
                tempElement = array[j+1]
                array[j+1] = array[j]
                array[j] = tempElement
            }
        }
    }
}

function selectionSortFor0s1s2s(array,length){
    for(let i=0;i<length-1;i++){
        let smallestElement = array[i]
        let smallestIndex = i
        for(let j = i+1;j<length-1;j++){
            if(array[j]>array[j+1]){
                smallestIndex = j+1
                smallestElement = array[j+1]
            }
        }
        array[smallestIndex] = array[i]
        array[i]=smallestElement
    }
}

// console.log(totalCount);
// selectionSortFor0s1s2s(array,array.length)
// console.log(`Array after selection sort ${array}`);


// MOST OPTIMIZED APPROACH WHICH IS DNF ALGORTIHM 

function DNFalgorithm(array){
    let low = 0;
    let mid =0;
    let high = array.length-1
    let tempElement;

    while(mid<=high){
        if(array[mid]=== 0){
            tempElement = array[mid]
            array[mid] = array[low] // yaha low ki value mid me
            array[low] = tempElement // yaha mid ki value low me store ho rahi hai 
            low++
            mid++ 
        } else if(array[mid] === 1){
            mid++
        }else {
            tempElement = array[mid] // 2
            array[mid] = array[high] // yaha high ki value mid me store ho rahi hai
            array[high] = tempElement //yaha mid ki value high me store ho rahi hai
            high--
        }
    }
}
DNFalgorithm(array)
console.log(`Array sorted by DNF Algorith ${array}`);
