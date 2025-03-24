let array = [ 1,2,3,4,4,4,4,4,4,4,4,2,2]
array.sort()
let n = array.length
let freq = 1 
let ans = array[0]

for(let i =1 ; i< n;i++){
    if(array[i]===array[i-1]){
        freq++ 
    }
    else {
        freq =1;
        ans = array[i]
    }
    if(freq > Math.floor(n/2)){
        console.log(`Ans found ${array[i]}`);
    }
   
}