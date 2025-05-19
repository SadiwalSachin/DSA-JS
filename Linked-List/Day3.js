class Node {
    constructor(value){
        this.data = value
        this.next = this.prev = null
        
    }
}

class doublyList {
    constructor(){
        this.head = null
        this.tail = null
    }

    pushFront(value){
        let newNode  = new Node(value)

        if(this.head == null){
            this.head = this.tail = newNode
        }else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    pushBack(value){
        let newNode = new Node(value)

        if(this.head == null){
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }

    popFront () {
        if(this.head == null){
            return "Cannot perfrom popFront operation"
        }
        let tempNode = this.head
        this.head = this.head.next
        if(this.head != null){
            this.head.prev = null
            tempNode.next = null
        }
    }

    printLinkedList(){
        let tempNode = this.head
        while(tempNode!=null){
            console.log(tempNode);
            tempNode = tempNode.next
        }
    }
}

let doublyLL = new doublyList()
doublyLL.pushFront(1)
doublyLL.pushBack(2)
doublyLL.pushBack(3)
doublyLL.pushBack(4)
doublyLL.pushBack(5)
doublyLL.popFront()
doublyLL.printLinkedList()
