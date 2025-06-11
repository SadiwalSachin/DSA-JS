let temperatures = [73,74,75,71,69,72,76,73]


function getDaysOfWarmerTemperature(temperatures){
    let n = temperatures.length
    let stack = []
    let ans = []
    for(let i = n-1;i>=0;i--){
        while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
            stack.pop()
        }

        if(stack.length == 0){
            ans[i] = 0
        } else {
            ans[i] = stack[stack.length-1] - i
        }

        stack.push(i)
    }

    return ans
}


console.log(getDaysOfWarmerTemperature(temperatures))