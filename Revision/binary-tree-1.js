class Node {
    constructor(data,left,right){
        this.data = data,
        this.left = null,
        this.right = null
    }
}


let index = -1
function buildTree(preOrder){
    index++
    if(preOrder[index]==-1) return null
    let root = new Node(preOrder[index])
    root.left = buildTree(preOrder)
    root.right = buildTree(preOrder)
    return root
}

let preOrder = [1,2,-1,-1,3,4,-1,-1,5,-1,-1]

const root = buildTree(preOrder)

function preOrderTraversal(root){
    if(root==null) return
    console.log(root.data);
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
    
}

// preOrderTraversal(root)


function levelOrderTraversal(root){
    let queue =  []
    queue.push(root)

    while(queue.length>0){
        let curr = queue.shift()
        console.log(curr.data);
        if(curr.left!=null) queue.push(curr.left)
        if(curr.right!=null) queue.push(curr.right) 
    }

}


// console.log(`Output of level order traversal`);
// levelOrderTraversal(root)

function levelOrderTraversalWithEndLine(root){
    let queue=[]
    queue.push(root)
    queue.push(null)

    while(queue.length>0){
        let node = queue.shift()

        if(node==null){
            if(queue.length>0){
                console.log(" ");
                queue.push(null)
                continue;
            } else {
                break
            }
        }
        console.log(node.data);
        
        if(node.left!= null) queue.push(node.left)
        if(node.right!= null) queue.push(node.right)
    }
}
console.log(`Output of level order traversal with end of line`);
levelOrderTraversalWithEndLine(root)