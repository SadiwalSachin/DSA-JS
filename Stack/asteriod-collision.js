let astreiods = [5,10,-5]

console.log(Math.abs(-2));

function astreiodCollision(astreiods){
    let stack = []
    for(let i=0;i<astreiods.length;i++){
        let current = astreiods[i]

        while(stack.length>0 && stack[stack.length-1]>0 && current<0){
            if(Math.abs(stack[stack.length-1]) < Math.abs(current)){
                stack.pop()
                continue
            } else if(Math.abs(current) == Math.abs(stack[stack.length-1])){
                stack.pop()
                current = 0
                break
            } else {
                current = 0
                break
            }
        }

        if(current!=0){
            stack.push(current)
        }

    }

    return stack
}

console.log(astreiodCollision(astreiods));