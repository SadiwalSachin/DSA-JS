// CREATION ON LINKEDLIST

class List {
    constructor(data){
        this.head = {
            value:data,
            next:null
        },
        this.tail = this.head
        this.size = 1
    }
    appendNode(nodeData){
        let newNode = {
            value:nodeData,
            next:null
        }
        this.tail.next = newNode
        this.size+=1
        this.tail = newNode
    }
    traversing(node,updatedData){
        let counter  = 0
        let currentNode = this.head;
        while(counter<this.size){
            if(node === currentNode.value){
                currentNode.value = updatedData
            }
            console.log(currentNode);
            currentNode = currentNode.next
            counter++
        }
    }

    deleteNode(index){
        let counter = 1 
        let leadNode = this.head 
        if(index === 1){
            this.head = this.head.next
        } else {
            while(counter < index - 1){
                leadNode = leadNode.next
                counter++
            }
            let nextNode = leadNode.next.next
            leadNode.next = nextNode
            console.log("leadNode",leadNode);
            
        }
    }
}

const list = new List(100)
list.appendNode(200)
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)
// list.traversing(200,700)
console.log(list);

list.deleteNode(4)
console.log(list);

// TRAVERSING ON LINKEDLIST