function validateBST(root,min,max){
    if(root==null) return false

    if(min!=null && root.val<min){ // right
        return false
    }

    if(max!=null && root.val>max){ // left subtree
        return false
    }

    return validateBST(root.left,min,root.val) && validateBST(root.right,root.val,max)
}