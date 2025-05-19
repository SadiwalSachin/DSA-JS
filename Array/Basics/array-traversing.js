let data = [1,2,3,4,5,6,7,8,9,10]
const input =  document.querySelector("input")
const btn = document.querySelector("button")
// console.time("a")
// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     console.log(`Element at index ${i}: ${element}`);
//     document.write(`Array's Element at index ${i} ${data[i]} <br>`)
// }




const findeValue = (index) => {
    return data[index]
}


btn.addEventListener("click", () =>{
    
    alert(`Value of arrays element at index ${input.value} is equal to ${findeValue(input.value)}`)
})

// document.write(data[7])

const arr = [10, 20, 30, 40];
const squared = arr.map(value => {
    if(value == 30){
    }
});
console.log(squared); // [100, 400, 900, 1600]
