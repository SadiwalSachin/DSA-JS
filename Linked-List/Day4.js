class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class CircularList {
    constructor(){
        this.head = this.tail = null
    }

    insertAtHead(value){
        let newNode = new Node(value)

        if(this.head == null){
            this.head = this.tail =  newNode
            this.tail.next = newNode
        }else{ 
            newNode.next = this.head
            this.head = newNode
            this.tail.next = newNode
        }
    }

    insertAtTail(value){
        let newNode = new Node(value)
        
        if(this.head == null){
            this.head = this.tail = newNode
            this.tail.next = newNode
        }else{
            newNode.next = this.head
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    deleteAtFirst(){
        if(this.head == null){
            return
        } else if(this.head == this.tail){
            this.head=this.tail = null
        } else {
        let tempNode = this.head
        this.head = this.head.next
        this.tail.next = this.head
        tempNode.next = null
        }
    }

    printLL(){
        if(this.head == null){
            return "Linked List is Empty"
        }
        console.log(this.head);
        let tempNode = this.head.next
        while(tempNode != this.head){
            console.log(tempNode.value);
            tempNode = tempNode.next
        }
        console.log(tempNode);
    }
}

let circluarLL = new CircularList()
circluarLL.insertAtHead(1)
circluarLL.insertAtHead(2)
circluarLL.insertAtHead(3)
circluarLL.insertAtHead(4)

circluarLL.printLL()
// console.log(circluarLL);
