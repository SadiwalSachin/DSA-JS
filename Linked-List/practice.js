
class Node {
    constructor(data){
        this.val = data
        this.next = null
    }
}

class List {
    constructor (data) {
        if(!data){
            this.head = null
            this.tail = null
        }else {
            this.head = new Node(data)
            this.tail = this.head
        }
    }

    pushFront (val) {
        let newNode = new Node(val)
        if(this.head === null){
            this.head = this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    pushBack(val){
        let newNode = new Node(val)
        if(this.head == null){
            this.head = this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
    }

    popFront(){
        if(this.head == null){
            console.log("Linked List is empty");
        } else {
            this.head = this.head.next
        }
    }

    popBack(){
        if(this.head == null){
            return "Linked List is empty"
        }
        let tempNode  = this.head
        while(tempNode.next != this.tail){
            tempNode = tempNode.next
        }
        tempNode.next = null
        this.tail = tempNode
    }

    insertInMiddle(val,pos){
        if(pos<0){
            return "Invalid Position"
        }

        if(pos==0){
            this.pushFront(val)
            return
        }

        let tempNode = this.head
        for(let i = 0 ; i < pos;i++){
            if(tempNode == null) {
                return ""
            }
            tempNode = tempNode.next
        }

        let newNode = new Node(val)
        newNode.next = tempNode.next
        tempNode.next = newNode
    }

    printLinkedList(){
        let tempNode = this.head
        while(tempNode!= null){
            console.log(tempNode);
            console.log("\n");
            tempNode = tempNode.next
        }
    }
}

const list = new List()
list.pushFront(3)
list.pushFront(2)
list.pushFront(1)
list.insertInMiddle(5,0)
console.log(list);