function height(root){
    if(root==null) return 0
    let leftHT = height(root.left)
    let rightHT = height(root.height)
    return Math.max(leftHT,rightHT) + 1
}