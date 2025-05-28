// LARGEST RECTANGLE IN HISTOGRAM

const heights = [2,1,5,6,2,3]

const n = heights.length

const stack = []
const left = []
const right = []

// RIGHT SMALLER VALUE

for(let i = n-1 ;i>=0 ;i--){
    while((stack.length>0) && (heights[stack.length -1] >= heights[i])){
        stack.pop()
    }

    right[i] = stack.length === 0 ? n : (stack.length -1) 
    stack.push(i)
}

console.log(right);
