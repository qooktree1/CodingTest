function solution(arr) {
    if (arr.length === 1) {
        return [-1]
    } else {
        const minNum =  [Math.min.apply(null, arr)]
        const newArr = []
        arr.forEach( num => {
            if (num != minNum) {
                newArr.push(num)    
            }
        })
        return newArr
        
    }
}