// let data = [ 1,2,3,4,5,6,7]
// let position = 3;

// for(let i = position ; i< data.length - 1; i++){
//     data[i] =data[i+1]
// }

// data.length = data.length - 1

// console.log(data);


let data = [78,67,90,36,89,66]

let position = 3;

console.log("Before delete element :- ",data);

for(let i = position ; i<data.length ;i++){
    data[i] =data[i+1]
}

data.length = data.length -1 

console.log("After delete element :- ",data);
