function isPalindrome(head){
    // first find middle
    // reverse the second half
    // compare the elements

    let slow = head
    let fast = head

    while(fast!==null && fast.next !==null){
        slow  = slow.next
        fast = fast.next.next
    }

    let reverseHead = slow
    let prev = null
    let curr = reverseHead
    let next  = null

    while(curr!==null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    let first = head
    let second = prev

    while(second!==null){
        
    }



}