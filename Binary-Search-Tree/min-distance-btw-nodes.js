

let prev = null
let ans = Infinity

function getMinDistance(root){
    if(root==null) return Infinity

    if(root.left){
        let lefMin = getMinDistance(root.left)
        ans = Math.min(ans,lefMin)
    }

    if(prev!=null){
        ans = Math.min(ans , Math.abs(root.data - prev.data))
    }
    prev = root.data

    if(root.right){
        let rightMin = getMinDistance(root.right)
        ans = Math.min(ans,rightMin)
    }
}