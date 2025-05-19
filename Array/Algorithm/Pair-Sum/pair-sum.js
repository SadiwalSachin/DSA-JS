let array  = [2 ,4,5,7,11,15]

let target = 9
// 2 Pointer Approach
function findPairSum(array,target){
    let start = 0
    let end = array.length -1;
    let pairSum
    while(start<end){
        pairSum = array[start] + array[end]
        if(pairSum>target){
            end--
        } else if(pairSum<target){
            start++
        } else {
            return {start,end}
        }
    }
    return -1
}

console.log(findPairSum(array,target))
