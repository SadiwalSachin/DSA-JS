// using array 

let stack = []
// push operation
stack.push(1)
stack.push(2)
stack.push(3)

// console.log(stack);
// get the top element 
// console.log(stack[stack.length-1])


class Stack {
    constructor(val){
        this.items = []
        if(val){
            this.items.push(val)
        }
    }

    push_element(val){
        this.items.push(val)
    }

    pop_element(){
        return this.items.pop()
    }

    top_element(){
        return this.items[this.items.length-1]
    }

    is_empty(){
        return this.items.length==0
    }
}

let stack1 = new Stack()
stack1.push_element(2)
// console.log(stack1);

// using linkedlist 

class linkedlistStack{
    constructor(val){
        this.head = {
            val:val,
            next:null
        }

        this.tail =  this.head
    }

    push_element(val){
        let newNode = {
            val:val,
            next:null
        }
        if(!this.head){
            this.head = this.tail = newNode
        }else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    pop_element(){
        let element = this.head
        this.head = element.next
        return element
    }
}


// valid parenthesis

function isValidString(str){
    let stack = []
    for(let i =0;i<str.length;i++){
        if(str[i]==="(" || str[i]==="{" || str[i]==="["){
            stack.push(str[i])
        }else{
            if(stack.length==0) return false
            if(
                (str[i] == ")" && stack[stack.length-1]=="(") ||
                (str[i] == "}" && stack[stack.length-1]=="{") ||
                (str[i] == "]" && stack[stack.length-1]=="[")
            ){
                stack.pop()
            }else{
                return false
            }
        }
    }

    return stack.length == 0 ? true :false
}

console.log(isValidString("((({[]})))"))