// print all the subsets of the array via recursion
let arr = [1,2,3]
let ans = []
let i =0

function printSubSets(arr,ans,i){
    if(i==arr.length){
        console.log(ans)
        return
    }
    ans.push(arr[i])
    printSubSets(arr,ans,i+1)
    ans.pop()
    printSubSets(arr,ans,i+1)
}


printSubSets(arr,ans,i)
