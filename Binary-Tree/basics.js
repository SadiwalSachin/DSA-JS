class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

let index = -1
function buildTree(preOrder){
    index++
    if(preOrder[index]==-1) return null
    let root  = new Node(preOrder[index])
    root.left = buildTree(preOrder)
    root.right = buildTree(preOrder)
    return root
}

const preOrder = [1,2,-1,-1,16,6,-1,-1,10,-1,-1]

let root = buildTree(preOrder)

function preOrderTraversal(root){
    if(root?.data==null) return

    console.log(root?.data + " ");
    preOrderTraversal(root?.left) 
    preOrderTraversal(root?.right)
}

// preOrderTraversal(root)

function inOrderTraversal(root){
    if(root==null) return
    inOrderTraversal(root.left)
    console.log(root.data);
    inOrderTraversal(root.right)
}

// inOrderTraversal(root)

function height(root){
    if(root==null) return 0
    leftHT = height(root.left)
    rightHT = height(root.right)
    return Math.max(leftHT,rightHT) + 1
}

// console.log("Height of the tree is :   ",height(root));

function calulcateNode(root){
    if(root == null) return 0;
    let leftCount = calulcateNode(root.left)
    let rightCount = calulcateNode(root.right)
    return  (leftCount + rightCount + 1)
}

// console.log("Total Nodes of the tree is :   ",calulcateNode(root));

function calculateSumOfNodes(root){
    if(root==null) return 0;
    let leftSum = calculateSumOfNodes(root.left)
    let rightSum = calculateSumOfNodes(root.right)
    return leftSum + rightSum + root.data
}

// console.log("The sum of all nodes is :",calculateSumOfNodes(root))

function maximumNodeinTree(root){
    if(root==null) return 0

    let leftNode = maximumNodeinTree(root.left)
    let rightNode = maximumNodeinTree(root.right)

    return Math.max(root.data , leftNode ,rightNode)
}

// console.log("the max node in tree is :",maximumNodeinTree(root));


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

console.log("The leaf node of the trees are :",printLeafNode(root));
