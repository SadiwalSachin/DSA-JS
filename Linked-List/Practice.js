

class LinkedList {
    constructor(value){
        this.head = {
            value,
            next:null
        }
        this.tail = this.head
    }

    appendNode(val){
        let newNode = {
            value:val,
            next:null
        }

        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    traversing(){
        let node = this.head
        while(node != null){
            console.log(node.value)
            node = node.next
        }
    }

    deleteNode(index){
        let leadNode = this.head
        let counter = 1;
        if(index == 1){
          return  this.head = this.head.next
        } else {
            while(counter<index-1){
                leadNode = leadNode.next
                counter++
            }
        }
        let nextNode = leadNode.next.next
        leadNode.next = nextNode
    }

    pushFront(value){
        let newNode = {
            value,
            next:null
        }
        if(this.head == null){
            this.head = this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    popFront(){
        if(this.head == null){
            return "Linked List is empty"
        } else {
            this.head = this.head.next
        }
    }

    popBack(){
        if(this.head == null){
            return "Linked List is empty"
        } else {
            let tempNode = this.head
            while(tempNode.next!=this.tail){
                tempNode = tempNode.next
            }

            tempNode.next = null
            this.tail = tempNode
        }
    }

    inserInMiddle(value,position){
        if(position<0) return "Invalid Postion"
        if(position == 0) this.pushFront(value)

        let tempNode = this.head
        for(let i=0;i< position-1;i++){
            if(tempNode == null) return
            tempNode = tempNode.next
        }

        let newNode = {
            value,
            next:null
        }

        newNode.next = tempNode.next
        tempNode.next = newNode
    }
}

const ll = new LinkedList(100)
ll.appendNode(200)
ll.appendNode(300)
ll.traversing()
ll.pushFront(500)
console.log("After push front");
ll.pushFront(600)
ll.pushFront(700)

ll.traversing()

ll.popFront()
console.log("After pop front");

ll.traversing()

// console.log(ll);
