class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = this.tail = null
    }

    pushElement(value){ // insert data at the tail of the linked list
        let newNode = new Node(value)

        if(this.isEmpty()){
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    popElement(){
        if(this.isEmpty()){
            return "LL is Empty"
        } else {
            this.head = this.head.next
        }
    }

    frontElement(){
        return this.head.value
    }

    isEmpty(){
        return this.head == null
    }
}

class Deque {
    constructor(){
        this.head = this.tail = null
    }

    pushElementFromBack(value){ // insert data at the tail of the linked list
        let newNode = new Node(value)

        if(this.isEmpty()){
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    pushElementFromFront(value){ // insert data at the tail of the linked list
        let newNode = new Node(value)

        if(this.isEmpty()){
            this.head = this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    popElementFromFront(){
        if(this.isEmpty()){
            return "LL is Empty"
        } else {
            this.head = this.head.next
        }
    }

    popElementFromBack(){
        if(this.isEmpty()){
            return "LL is Empty"
        } else {
            let tempNode = this.head
            while(tempNode.next != this.tail){
                tempNode =tempNode.next
            }

            tempNode.next = null
            this.tail = tempNode
        }
    }

    frontElement(){
        return this.head.value
    }

    backElement(){
        return this.tail.value
    }

    isEmpty(){
        return this.head == null
    }
}

let queue = new Queue()

// console.log(queue);

queue.pushElement(10)
queue.pushElement(20)
queue.pushElement(30)
queue.pushElement(40)

// console.log(queue);

// while(!queue.isEmpty()){
//     console.log(`${queue.frontElement()}`);
//     queue.popElement()
// }

let deq = new Deque()

deq.pushElementFromFront(5)
deq.pushElementFromBack(1)
deq.pushElementFromBack(2)
deq.pushElementFromBack(3)
deq.pushElementFromBack(4)

console.log(deq);


while(!deq.isEmpty()){
    console.log(`${deq.frontElement()}`);
    deq.popElementFromFront()
}



