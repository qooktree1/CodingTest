const solution = answers => {
    const N = answers.length
    let first = [1, 2, 3, 4, 5]
    let second = [2, 1, 2, 3, 2, 4, 2, 5]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    while (first.length < N){
        first = [...first, ...first]
    }
    while (second.length < N){
        second = [...second, ...second]
    }
    while (third.length < N){
        third = [...third, ...third]
    }
    
    const numberCnt = [0, 0, 0]
    
    for (let i=0; i<answers.length; i++){
        if (answers[i] === first[i]) numberCnt[0] += 1
        if (answers[i] === second[i]) numberCnt[1] += 1
        if (answers[i] === third[i]) numberCnt[2] += 1
    }
    const maxNum = Math.max(...numberCnt)
    const ans = []
    
    for (let i=0; i<3; i++){
        if (maxNum === numberCnt[i]) ans.push(i+1)
    }
    return ans
}