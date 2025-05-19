let data1 = [3,7,12,78,85,99]
let data2 = [20,30,405,789]

let data = []

for(let i = 0; i<data1.length ; i++){
    data[i] = data1[i]
}

for(let i = 0 ; i < data2.length ; i++){
    data[data.length - 1 + 1] = data2[i]
    
}

console.log(data);
