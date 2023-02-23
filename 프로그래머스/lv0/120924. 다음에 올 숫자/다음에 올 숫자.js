function solution(common) {
    const checkArray = []
    // 등차인지 등비인지 확인
    for (let i=0; i<common.length-1; i++){
        checkArray.push(common[i+1] - common[i])
    }
    
    // 등차
    if (checkArray[checkArray.length-1] === checkArray[0]) return common[common.length-1] + checkArray[0]
    
    // 등비
    else return common[common.length-1] * (common[1] / common[0])
}