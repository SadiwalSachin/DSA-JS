const nums = [1,2,3,4]


// BRUTE FORCE APPROACH 
let product = 1;
let ans =[]


function bruteForceApproach(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(!(i==j)){
                product*=nums[j]
            }
        }
        ans[i] = product
        product = 1;
    }
    return ans
}

// OPTIMAL APPROACH O(n) Time Complexity

// In this approach we have to find the prefix product and suffix product for each index
// but in this space complexity is not optimized so we can also optimize the space complexity is reduced
let prefixProduct = []
let suffixProduct = []

for(let i=0;i<nums.length;i++){
    if(i==0) {
        prefixProduct[i] = 1
    }else{
        prefixProduct[i] = prefixProduct[i-1]*nums[i-1]
    }
}

console.log(prefixProduct);

for(let i = nums.length -1;i>=0;i--){
    if(i == nums.length-1){
        suffixProduct[i] = 1
    }else{
        suffixProduct[i] = nums[i+1]*suffixProduct[i+1]
    }
}

console.log(suffixProduct);

for(let i=0;i<nums.length;i++){
    ans[i] = prefixProduct[i]*suffixProduct[i]
}

console.log("Final ans is :-",ans);


