// VALID PARATHESES QUESTION

let str = "({[]})"

function isValidString(str){
    let stack =[]

    for(let i=0;i<str.length ; i++){
        if((str[i] == "(") || (str[i] == "{") || (str[i] == "[") ){
            stack.push(str[i])
            console.log(stack)
        } else {
            if (stack.length == 0) {
                return false
            } if( (str[i] == ")" && stack[stack.length -1] == "(") ||
                  (str[i] == "}" && stack[stack.length -1] == "{") ||
                  (str[i] == "]" && stack[stack.length -1] == "[")
            ) {
                console.log("now removal of element will be started",stack);
                stack.pop()
            } else {
                return false
            }
        }
    } 

    return stack.length == 0

}

console.log(isValidString(str));

