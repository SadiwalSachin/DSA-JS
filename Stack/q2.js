let stocks = [100,80,60,70,60,75,85]

let ans = []
let stack = []

function getTop(stack){
    return stack?.length - 1
}

for(let i=0;i<stocks.length;i++){
    while(stack.length>0 && (stocks[getTop(stack)]<= stocks[i])){ // checking the greater value here
        stack.pop()
    }

    if(stack.length == 0) {
        ans.push(i + 1)
    } else {
        ans.push(i - getTop(stack))
    }

    stack.push(i)
}

console.log(ans);
