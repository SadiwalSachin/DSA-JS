function createBinaryTree(arr){
    let root = null
    for(let i=0;i<arr.length;i++){
        root = insertNode(root,arr[i])
    }

    return root
}

function insertNode(root,val){
    if(root==null){
        root = {
            val:val,
            left:null,
            right:null
        }
    }

    if(val<root.val){
        root.left = insertNode(root.left,val)
    }
    if(val>root.val){
        root.right = insertNode(root.right,val)
    }
    return root
}

const arr = [3,2,1,5,6,4]

const root = createBinaryTree(arr)
// console.log("root of the bt",root);


function searchInBT(root,key){
    if(root==null) return false
    if(root?.val==key) return true

    if(root?.val>key){
       return searchInBT(root?.left,key)
    }else{
       return searchInBT(root?.right,key)
    }
}

const search = searchInBT(root,9)
// console.log(search);

function levelOrderWithEnter(root){
    let queue = []
    queue.push({node:root,level:1})
    queue.push({node:null,level:1})
    let prev = null

    while(queue.length>0){
        let {node,level} = queue.shift()
        console.log(`nodes value${node?.val} nodes level ${level}`);

        if(prev) prev.next = node
        prev = node

        if(node==null){
            if(prev) prev.next=null
            prev = null
            if(queue.length>0){
                console.log("\n");
                queue.push({node:null,level:level+1})
                continue
            }else{
                continue
            }
        }
        if(node.left){
            queue.push({node:node.left,level:level+1})
        }
        if(node.right){
            queue.push({node:node.right,level:level+1})
        }

    }
}

levelOrderWithEnter(root)

