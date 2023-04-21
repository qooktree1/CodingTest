function solution(picture, k) {
    const ans = []
    for (let i=0; i<picture.length; i++){
        let tmp = ""
        for (let j=0; j<picture[i].length; j++){
            for (let l=0; l<k; l++){
                tmp += picture[i][j]
            }
        }
        for (let l=0; l<k; l++) ans.push(tmp)
        
        
    }
    return ans
}