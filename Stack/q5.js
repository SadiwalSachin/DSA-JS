// Design : Min Stack 

class Stack {
    constructor (){
        this.items=[]
    }

    pushElement(value){
        const isEmpty = this.items.length == 0

        if(isEmpty){
            this.items.push({
                value,
                "minValue":value
            })
        } else {
            const topValue = this.items[this.items.length - 1]
            if(topValue.minValue > value){
                this.items.push({
                    value:value,
                    minValue:value
                })
            } else {
                this.items.push({
                    value,
                    minValue:value
                })
            }
        }
    }

    getMin(){
        const minValue = this.items[this.items.length - 1]?.minValue
        return minValue
    }

    popElement(){
        this.items.pop()
    }

    getTopElement(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length == 0
    }
}

let stack = new Stack()

stack.pushElement(-2)
stack.pushElement(0)
stack.pushElement(-3)

console.log(stack );
