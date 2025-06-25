function printLeafNode(root){
    if(root==null){
        return true
    }

    let leftNode = printLeafNode(root.left)
    let rightNode = printLeafNode(root.right)

    if(leftNode&&rightNode){
        console.log(root.data);
    }

    return
}