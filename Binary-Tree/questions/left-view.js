
function leftView(root){
    let queue = []
    let ans = []
    queue.push({node:root,level:1})

    let map = {}

    while(queue.length>0){
        let {node,level} = queue.shift()

        if(!map[level]){
            ans.push(node.val)
            map[level]=true
        }

        if(node.left){
            queue.push({node:node.left,level:level+1})
        }
        if(node.right){
            queue.push({node:node.right,level:level+1})
        }
    }
}