// Reverse a Linked List

// 1->2->3->4

class List {
    constructor (data) {
        console.log(data);
        this.head  = {
            val:data,
            next:null
        }
        this.tail = this.head
    }

    reverseLinkedList(){
        if(this.head == null){
            return "Cannot Reverse a Linked List"
        }

        let prev = null
        let curr = this.head
        let next = null
        this.tail = curr
        
        while(curr!=null){
            next = curr.next 
            curr.next = prev
            prev = curr
            curr= next
        }

        this.head = prev
    }

    pushBack(data){
        let newNode = {
            val:data,
            next:null
        }

        if(this.head == null){
            this.head = this.tail = newNode
        }

        this.tail.next = newNode
        this.tail = newNode
    }
}

let ll = new List(1)
ll.pushBack(2)
ll.pushBack(3)
ll.reverseLinkedList()
console.log(ll);

function hasCycle(head){
    let slow = head
    let fast = head

    while(fast!=null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next

        if(slow === fast){
            return true
        }
    }
    return false
}

function detectCycleAndRemove(head){
   let slow = head
   let fast = head 
   let isCycle = false
   while(fast!=null && fast.next!=null){
    slow = slow.next
    fast = fast.next.next
    if(slow = fast){
        isCycle = true
        break; // to preserve the ponit
    }
   }

   if(isCycle){
    return null
   }

   slow = head
   let prevNode = fast
   while(slow!=fast){
    slow=slow.next
    prev = fast
    fast=fast.next
   }
    prev.next =  null
   return slow 
}

