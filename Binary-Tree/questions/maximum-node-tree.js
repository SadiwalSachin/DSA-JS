
function maximumNodeinTree(root){
    if(root==null) return 0

    let leftNode = maximumNodeinTree(root.left)
    let rightNode = maximumNodeinTree(root.right)

    return Math.max(root.val , leftNode ,rightNode)
}