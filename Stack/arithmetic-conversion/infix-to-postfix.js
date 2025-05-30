

function priority(str){
    if(str == "^"){
        return 3
    } else if(str == "*" || str == "/"){
        return 2
    } else if(str == "+" || str == "-"){
        return 1
    } else {
        return -1
    }
}

function infixToPostfixConversion(string){
    let stack = []
    let ans = ""
    let  i= 0;

    while(i<string.length){
        if(
            (string[i] >= "A" && string[i] <="Z") ||
            (string[i] >= "a" && string[i] <="z") ||
            (string[i] >= "1" && string[i] <= "9")
        ){
            ans = ans + string[i]
        } else if(string[i] == "("){
            stack.push(string[i])
        } else if(string[i] == ")"){
            while((stack.length != 0) && stack[stack.length-1]!="("){
                ans = ans + stack[stack.length-1]
                stack.pop()
            }
            stack.pop()
        }
        else {
            while((stack.length != 0) && priority(string[i]) <= priority(stack[stack.length-1])){
                ans = ans + stack[stack.length-1]
                stack.pop()
            }

            stack.push(string[i])

        }
        i++
    }

    while(stack.length !=0){
        ans = ans + stack[stack.length-1]
        stack.pop()
    }

    return ans

}

let string = "a+b*(c^d-e)"

let finalAns = infixToPostfixConversion(string)

console.log(string , "\n",finalAns);
