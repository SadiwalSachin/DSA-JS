

function lowestCommonAncestor(root,p,q){
    if(root==null) return null

    if(root.val>p && root.val>q){
        return lowestCommonAncestor(root.left,p,q)
    } else if(root.val<p && root.val<q){
        return lowestCommonAncestor(root.left,p,q)
    } else {
        return root
    }
}