function identicalTree(p,q){

    if(q==null || p==null) {
        return p==q
    }

    let leftNodes = identicalTree(p.left , q.left)
    let rightNodes = identicalTree(p.right , q.right)

    return leftNodes && rightNodes && p.val == q.val
}

function isSubTree(root,subRoot){

    if(root==null || subRoot==null){
        return root==subRoot
    }

    if(root.val==subRoot.val && identicalTree(root,subRoot)){
        return true
    }

    return isSubTree(root.left,subRoot) || isSubTree(root.right,subRoot)
     
}
