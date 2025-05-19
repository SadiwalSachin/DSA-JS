let array  = [1,8,6,2,5,4,8,3,7]
// let maxWater = 0;
// let height = 0;
// let width  = 0;

// BRUTE FORCE APPROACH LEKIN YE TLE DE DEGA 

// for(let i =0;i<array.length;i++){ // O(n^2)
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]>=array[j]){
//             height = array[j]
//             width = j - i  
//         } else {
//             height = array[i]
//             width = j - 1
//         }
//         if((height*width)>maxWater){
//             maxWater = height *  width
//         }
//     }
// }

// console.log("Max water that can be accomodated is",maxWater);

// EFFICIENT APPROACH USING TWO POINTERS

let leftWall =0;
let rightWall = array.length-1
let maxWater = 0
let width = 0;
let height = 0

while(leftWall<rightWall){
    width = rightWall - leftWall

    if(array[leftWall]<array[rightWall]){
        height = array[leftWall]
    } else {
        height = array[rightWall]
    }

    if((height*width)>maxWater){
        maxWater = height * width
    }

    array[leftWall] < array[rightWall] ? leftWall++ : rightWall--
}

console.log(`Now the question has been solved in linear time complexity : ${maxWater}`);

