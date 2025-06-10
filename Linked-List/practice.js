
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
            console.log(tempNode.val);
            tempNode = tempNode.next
        }
    }
}

const list = new List()
list.pushFront(6)
list.pushFront(5)
list.pushFront(4)
list.pushFront(3)
list.pushFront(2)
list.pushFront(1)
// console.log(list.printLinkedList());

// find middle of the linked list

function getMiddleOfLL(head){
    let slow = head
    let fast = head
    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow.val
}

// list.printLinkedList()

// console.log(getMiddleOfLL(list.head));

// reverse linked list

function reverseLinkedList(head){
    let prev = null
    let curr = head
    let next = null

    while(curr!=null){
        next = curr.next // preserve the ll
        curr.next = prev // reverse the connection
        prev = curr // updating the connection
        curr = next
    }

    return prev
}

console.log(list.head);

list.head = reverseLinkedList(list.head)

console.log(list.head);




// Deleting a node from linked list 

function deleteNode(list,index){
    let counter = 1
    let tempNode = list.head
    
    while(counter<index){
        tempNode = tempNode.next
        counter++
    }
    console.log(tempNode.val);
    
    tempNode.next = tempNode.next.next
}

// deleteNode(list,2)

// list.printLinkedList()


// Detect loop in the linked list

function detectCycle(list){
    let slow = list.head
    let fast = list.head

    while(fast=null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next

        if(slow==fast){
            return true
        }
    }

    return false
}

// console.log(detectCycle(list));


function detectPalindrone(head){
    let tempNode = head
    let stack = []

    

    while(tempNode!==null){
        if(tempNode.val!=stack[stack.length-1]){
            stack.push(tempNode.val)
        } else if(tempNode.val==stack[stack.length-1]){
            stack.pop()
        }
    }

    return stack.length==0 ? true : false
}

// detectPalindrone(list.head)