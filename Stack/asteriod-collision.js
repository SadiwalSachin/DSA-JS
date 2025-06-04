let astreiods = [2,3,4,-5,10,-20]

function getMax(num1 , num2){
   return Math.abs(num1) > Math.abs(num2) ? num1 : num2
}

function ANS(arr){
    let ansStack =[]

    for(let i = arr.length -1 ;i>=0 ;i--){
        let top = arr[i-1] * arr[i]
        if(top<0){
            let max = getMax(arr[i],arr[i-1])
            ansStack.push(max)
        }
    }
}