function rotateArray(nums, k) {
  // TLE
  let counter = 1;
  while (counter <= k) {
    let first = nums[0];

    for (let i = 0; i < nums.length; i++) {
      if (i == nums.length - 1) {
        nums[i] = first;
      } else {
        nums[i] = nums[i + 1];
      }
    }
    counter++
  }
}

// trying this will give tle
function moreOptimize(nums, k) {
    console.log("code is running");
    
  let start;
  if (k > nums.length) {
    start = k - nums.length;
  } else {
    start = k;
  }
  
  let counter = 1;
  while (counter <= start) {
    let first = nums[0];

    for (let i = 0; i < nums.length; i++) {
      if (i == nums.length - 1) {
        nums[i] = first;
      } else {
        nums[i] = nums[i + 1];
      }
    }
    counter++
  }

}


// Now the most optimal solution for these which has O(n) TC


function rotateLeft(nums,k){
  let start;
  if (k > nums.length) {
    start = k - nums.length;
  } else {
    start = k;
  }
  // first rotate the 0 - K elements
  rotateHelper(nums,0,start - 1)
  // rotate elements from k to length
  rotateHelper(nums,start,nums.length - 1)
  // rotate whole array
  rotateHelper(nums , 0 , nums.length -1)
}

function rotateHelper(arr,left,right){
    while(left<right){
        let tempElement = arr[left]
        arr[left] = arr[right]
        arr[right] = tempElement
        left++
        right--
    }
}


let nums = [1, 2, 3, 4, 5, 6];
let ans1 = moreOptimize(nums, 2);

let nums2 = [3, 4, 1, 5, 3, -5];
let ans2 = moreOptimize(nums2,8)

console.log(nums);
console.log(nums2);
