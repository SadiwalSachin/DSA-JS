

function height(root){
    if(root==null) return 0
    let leftHT = height(root.left)
    let rightHT = height(root.right)

    return Math.max(leftHT,rightHT)+1 
    
}

function diameter(root){
    if(root==null) return 0
    let leftDM = diameter(root.left)
    let rightDM = diameter(root.right)
    currentDiameter = height(root.left) + height(root.right)
    return Math.max(leftDM,rightDM,currentDiameter)
}