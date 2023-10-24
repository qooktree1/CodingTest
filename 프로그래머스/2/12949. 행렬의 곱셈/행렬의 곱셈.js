const solution = (arr1, arr2) => {
    const answer = []
    for (let i=0; i<arr1.length; i++) {
        const tmpArr = []
        for (let j=0; j<arr2[0].length; j++) {
            let total = 0
            for (let k=0; k<arr1[0].length; k++) {
                total += arr1[i][k] * arr2[k][j]
            }
         tmpArr.push(total)   
        }
        answer.push(tmpArr)
    }
    return answer
}