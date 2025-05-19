let stack = [];

stack.push(10)
stack.push(20)
stack.push(30)

// while(stack.length!==0){
//     console.log(stack[stack.length - 1]);
//     stack.pop()
// }


class Stack {
    constructor () {
        this.items = []
    }

    push_stack(value){
        this.items.push(value)
    }

    pop_stack(){
        this.items.pop()
    }

    top_stack(){
        return this.items[this.items.length - 1 ]
    }

    isEmpty(){
        return this.items?.length === 0
    }
}

const stack2 = new Stack()

stack2.push_stack(10)
stack2.push_stack(20)
stack2.push_stack(30)
stack2.push_stack(40)

console.log(stack2.items)

while(!stack2.isEmpty()){
    console.log(stack2.top_stack());
    stack2.pop_stack()
}



