

// this is iterative approach

function kthLevel(root,k){
    if(!root) return
    let queue = []
    queue.push({node:root,level:0})
    while(queue.length>0){
        let {node,level} = queue.shift()
        if(level==k){
            console.log(node.value)
        }

        if(node.left) queue.push({node:node.left,level:level+1})
        if(node.right) queue.push({node:node.right,level:level+1})
    }
}

// recursive approach

function kthLevelRecursive(root,k){
    if(root==null) return

    if(k==1){
        console.log(root.data);
        return
    }

    kthLevelRecursive(root.left,k-1)
    kthLevelRecursive(root.right,k-1)
}