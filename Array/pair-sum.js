let data = [2,7,11,15]
const neededSum = 9
let currentSum;

// MY FIRS'T APPROACH THNIK BY MY ME
// for(let start = 0 ; start < data.length ; start++){
//     currentSum = data[start];
//     for(let end = start+1 ; end < data.length ; end++){
//         if(data[end]>neededSum) continue;
//         currentSum+=data[end];
//         if(currentSum===neededSum){
//             console.log(`One pair of index exist with needed sum ${neededSum} is ${start},${end}`);
//         } else {
//             currentSum = data[start]
//         }
//     }
// }

// SOME OPTIMIZED APPROACH AFTER WATCHING SOME LECTURE

// for(let i = 0 ; i<data.length;i++){
//     for(let j = i +1 ; j<data.length ; j++){
//         if(data[i]+data[j] === neededSum){
//             console.log(`Pair of index finded which provide needed sum :- ${i} ${j}`);
            
//         }
//     }
// }

// TWO POINTER APPROACH 

let i = 0 ; 
let j = data.length - 1;

while(i<j){
    if( data[i] + data[j] > neededSum){
        j--
    } else if( data[i] + data[j] < neededSum){
        i++
    } else {
        console.log(`Pair finded ${i} , ${j}`);
        return 
    }
}