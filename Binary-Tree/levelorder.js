let queue = []

function levelOrderTraversel(root){
    queue.push(root)
    while(queue.length>0){
        let node = queue.shift()

        console.log(node);
        
        if(node.left!=null){
        queue.push(node.left)}
        queue.push(node.right)

        if(node.right!=null){
            queue.push(node.right)
        }
    }
}