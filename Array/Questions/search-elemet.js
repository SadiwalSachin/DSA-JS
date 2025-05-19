let data = [20,30,50,55,70,79,80,77,70]
let item = 70;
let index;

for(let i= 0 ; i< data.length ; i++){
    if(data[i]===item) {
        index = i ;
        break ;
    }
}

console.log("Element finded at index :-",index);
console.log(data.indexOf(item));

