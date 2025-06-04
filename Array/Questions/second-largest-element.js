// array is given to us we have to find the second largest if exist or not then return -1

let nums = [8, 8, 7, 6, 5];
let nums2 = [10, 10, 10, 10, 10]

function findSecondLargest(nums){
    // first find the largest
    let largestElement = -1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largestElement){
            largestElement = nums[i]
        }
    }

    let secondLargestElement = -1

    for(let i =0;i<nums.length;i++){
        if(nums[i]<largestElement && nums[i] > secondLargestElement){
            secondLargestElement = nums[i]
        }
    }

    return secondLargestElement
}

let ans1 = findSecondLargest(nums)
let ans2 = findSecondLargest(nums2)

console.log(ans1);
console.log(ans2);

