class LinkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head
    }

    pushBack(value){
        if(this.head==null){
            let newNode = {
                value:value,
                next:null
            }
        }
        let newNode = {
            value,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode
    }

    traversing(){
        if(this.head==null){
            return "Linked List is empty"
        }

        let tempNode = this.head
        while(tempNode != null){
            console.log(tempNode.value);
            tempNode = tempNode.next
        }
    }

    insert(value,pos){
        if(this.head ==null){
            return "Linked List is empty"
        }

        let counter = 0
        let tempNode = this.head
        while(counter<pos-1){
            tempNode = tempNode.next
            counter++
        }

        let newNode = {
            value,
            next:null
        }

        newNode.next = tempNode.next
        tempNode.next = newNode
    }

    reverse(){
        let prev = null
        let curr = this.head
        let next  = null

        while(curr != null){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        this.head = prev
    }

    middle(){
        let tempNode =this.head
        let counter = 0
        while(tempNode != null){
            counter++
            tempNode =tempNode.next
        }
        console.log(counter);

        let nodeIndex;
        if(counter%2==0){
            nodeIndex = Math.floor(counter/2)
        } else {
            nodeIndex = Math.floor(counter/2)
        }
        console.log(nodeIndex);
        tempNode =this.head
        counter = 0
        while(counter<nodeIndex){
            tempNode = tempNode.next
            counter++
        }

        return tempNode?.value

    }
}


const ll = new LinkedList(5)
ll.pushBack(6)
ll.pushBack(9)
ll.pushBack(11)
ll.pushBack(15)
ll.pushBack(-90)

// ll.traversing()

// ll.reverse()


console.log("the middle element is",ll.middle())


console.log("Linked list after reversing");


function mergeTwoLists(list1,list2){
    let h1 = list1
    let h2 = list2
    let temp 

    while(h1!=null && h2!=null){
        if(h1.value<=h2.value){
            temp = h1.next
            h1.next = h2
            h1 = temp
        } else {
            temp = h2.next
            h2.next = h1
            h2= temp
        }
    }
}






