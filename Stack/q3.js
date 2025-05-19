// NEXT GREATER ELEMENT

let vector  = [6,8,0,1,3]

let stack = []
let ans = []

for(let i =vector.length -1 ;i >=0;i--){
    while(stack.length>0 && (stack[stack.length -1] < vector[i])){
        stack.pop()
    }

    if(stack.length == 0) {
        ans[i] = -1
    } else {
        ans[i] =stack[stack.length - 1]
    }

    stack.push(vector[i])
}

console.log(ans);
