let astreiods = [2,-2]

console.log(Math.abs(-2));


function astreiodCollision(arr){
    let j = 1
    let ans = []
    for(let i=0;i<arr.length;i++){
        let num1 = arr[i]
        let num2 = arr[j]
        if((num1*num2) <0){
            let abs1 = Math.abs(num1)
            let abs2 = Math.abs(num2)
            let max = Math.max(abs1,abs2)
            if(max==Math.abs(abs1)) {
                ans[i] = abs1
            } else {
                ans[i] = abs2
            }
            j++
        }else if(Math.abs(num1)==Math.abs(num2)){
            ans = [ ]
            j++
        }
        else{
            ans[i] = arr[i]
            j++
        }
    }

    return ans
}

console.log(astreiodCollision(astreiods));
