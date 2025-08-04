function getBottomView(root){
    let queue = []
    
    queue.push({node:root,level:0})

    let map = {}

    while(queue.length>0){
        let {node , level} = queue.shift()
            map[level] = node.val
        if(node.left){
            queue.push({node:node.left,level:level-1})
        }    
        if(node.right){
            queue.push({node:node.right,level:level+1})
        }
    }

    // return the map after looping

}