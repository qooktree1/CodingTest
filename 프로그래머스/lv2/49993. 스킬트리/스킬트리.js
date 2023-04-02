function solution(main, skills) {
    let answer = 0
    
    for (let i=0; i<skills.length; i++){
        let flag = true
        let idx = 0  // main의 인덱스
        for (let j=0; j<skills[i].length; j++){
            if (main.includes(skills[i][j])){
                
                // 순서대로 확인
                if (skills[i][j] === main[idx]) idx++
                else{
                    flag = false
                    break
                }
            }
        }
        
        // 가능한 스킬트리
        if (flag) answer++
    }
    return answer
}