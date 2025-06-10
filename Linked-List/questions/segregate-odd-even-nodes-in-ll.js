function segrate(head){
    let even = head.next
    let odd = head
    let evenHead = even

    while(even!==null && even.next!=null){
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }

    odd.next = evenHead
}


// Why we use this approach lets see
// 