// Implement stack using queue

let Q1 = []
let Q2 = []

class Stack {
    constructor(){
        this.items =[]
    }

    push(value){
        while(Q1.length != 0){
            Q2.push(Q1[0])
            Q1.shift()
        }

        Q1.push(value)

        while(Q2.length != 0){
            Q1.push(Q2[0])
            Q2.shift()
        }
    }

    pop(){
        let ans = Q1[0]
        Q1.shift()
        return ans
    }

    top(){
        return Q1[0]
    }

    empty(){
        return Q1.length == 0
    }

}

