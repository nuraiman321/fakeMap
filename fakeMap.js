

const fakeMap =(num1, num2)=> {
    let arrX = []
    let arr = []
    let arr2 = []
    for(i = 0; i <= num1; i++){
        arrX.push('A')
        
    }
    arrX[0]='X'
    for(i = 0; i <= num1; i++){
        arr.push('A')
        
    }
    for(idx = 0; idx <= num2; idx++){
        arr2.push(arr)
    }
    
    arr2.shift()
    arr2.unshift(arrX)
    return arr2
}

console.log(fakeMap(5, 5))
console.log(fakeMap(2, 2))
console.log(fakeMap(3, 2))