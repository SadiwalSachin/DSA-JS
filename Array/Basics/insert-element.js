let data = [60,30,10,67,40];
// let newElement = 70;
// let position = 2;
// console.log(data);


// DSA 

// this is by reverse loop

// for(let i = data.length - 1 ; i>=0 ; i--){
//     if(i>=position){
//         data[i+1] = data[i]
//         if(i==position){
//           data[i] = newElement
//         }
//     }
// }


// inbuilt js method to do this 

// data.splice(2 , 1 , 4 ,5 ,6)

// console.log(data)


let array = [11,22,56,74,33,89,44]
let newElement =  99
let position = 3
console.log(array);

for(let i = data.length - 1;i>=0;i--){
  if(i>=position){
    array[i+1]=array[i]
    if(i==position){
      array[i] = newElement
    }
  }
}

console.log(array);


