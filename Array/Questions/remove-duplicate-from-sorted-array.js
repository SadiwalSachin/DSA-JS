// The key idea and approach for these will be two pointer approach 


let nums = [0,0,3,3,5,6]

function removeDuplicate(nums){
    let i=0;

    for(let j=1;j<nums.length;j++){
        if(nums[j]!= nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
}

let ans = removeDuplicate(nums)

console.log(nums);

