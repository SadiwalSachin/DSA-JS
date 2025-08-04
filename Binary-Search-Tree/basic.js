class Node {
    constructor(data,left,right){
        this.data = data
        this.left = this.right = null
    }
}

function insertNode(root,val){
    if(root==null){
        return new Node(val)
    }

    if(val<root.data){
        root.left = insertNode(root.left,val)
    } else {
        root.right = insertNode(root.right,val)
    }

    return root
}

function buildTree(arr){
    let root = null

    arr.forEach(element => {
       root = insertNode(root,element)
    });
    
    return root
}


let arr = [3,2,1,5,6,4]

const mainRoot = buildTree(arr)

console.log(mainRoot);

function searchNode(root,key){
    if(root==null){
        return false
    }

    if(root.data==key){
        return true
    }

    if(root.data>key){
        return searchNode(root.left,key)
    } else {
        return searchNode(root.right,key)
    }
}


// console.log(`Searching node in bst`);
// console.log(searchNode(mainRoot,8));

function inOrder(root){
    if(root == null) return

    inOrder(root.left)
    console.log(root.data);
    inOrder(root.right)
}



function deleteNode(root,key){
    if(root == null){
        return null
    }
    
    if(key<root.data){ // node will be in left sub tree
        root.left = deleteNode(root.left,key)
    }else if(key>root.data){// node will be in the right sub tree
        root.right = deleteNode(root.right,key)
    } else {
        if(root.left==null){
            return root.right
        }else if(root.right==null){
            return root.left
        } else {
            let inOrderNode = inOrderSuccessor(root.right,key)
            root.data = inOrderNode.data
            root.right = deleteNode(root.right,inOrderNode.data)
        }
    }
    
    return root
}

function inOrderSuccessor(root,key){
    
    while(root !==null && root.left!=null){
        root = root.left
    }
    return root
}

console.log(`Inorder before deletion of node`);
inOrder(mainRoot)

deleteNode(mainRoot,3)

console.log(`Inorder after deletion of node`);
inOrder(mainRoot)




