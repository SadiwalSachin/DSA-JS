//PREVIOUS SMALLER ELEMENT

const question = [3,1,0,8,6]

let stack = []
let ans = []

for(let i=0;i<question.length;i++){
    while(stack.length>0 && (stack[stack.length - 1] >= question[i])){
        stack.pop()
    }

    if(stack.length == 0){
        ans[i] = -1
    } else {
        ans[i] = stack[stack.length - 1]
    } 

    stack.push(question[i])
}

console.log(` Question is ${question} \n ans is ${ans}`);
