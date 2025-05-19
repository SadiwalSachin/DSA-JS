// How to create an array
// Basic literal type
let array = [1,2,3,4,5,6]
// console.log(array);
// console.log(typeof array);


// Using array constructor 
let array2 = new Array() // this creates an empty array
let array3 = new Array(4) // this will create 4 empty slots in an array
let array4 = new Array(1,2,3) // this will create an array with elements 1,2,3
let str = "sachin"

let array5 = new Array(str) // this will create array with single element which will be sachin
console.log(array5);

// Using array.of() method

let array6 =  Array.of(5) // this will return array with single element 5 
let array7 =  Array.of(1,2,3,4) // this will return array with elements 1,2,3,4 

console.log(array6);

// By using array.from() method

// this method converts an iterable or array-like object into array
let str2 = "Sachin"
let array8 = Array.from(str) // this will create an array of elements of string sachin 
let arrayOfNum = Array.from({length:10},(_,i)=>i+1)
console.log(arrayOfNum);


