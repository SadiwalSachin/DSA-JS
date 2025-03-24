

function printNum(num){

    if(num === 1){ // base case
        console.log(1);
        return
    }

    console.log(`${num} `); // the small problem that function is solving

    printNum(num-1) // calling it self for rest of the problem
    
}

printNum(4)