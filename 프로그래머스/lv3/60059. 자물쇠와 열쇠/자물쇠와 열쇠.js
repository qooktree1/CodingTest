// 문제: 자물쇠와 열쇠
// 시간: 50분
// 알고리즘: Lock 주위로 배열을 만들어 Key가 index를 넘어갈 수 있도록 함


// key 회전
const rotate = (arr, n) => {
    const rotatedArr = Array.from(Array(n), () => Array(n).fill(0))
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            rotatedArr[j][n-i-1] = arr[i][j]
        }
    }
    return rotatedArr
}

// 비어있는 Lock Count
const countBlanks = arr => {
    let cnt = 0
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if (arr[i][j] === 0) cnt++
        }
    }
    return cnt
}

const solution = (key, lock) => {
    const N = lock.length
    const M = key.length
    
    const blanks = countBlanks(lock)  // Lock의 빈칸 Count
    if (blanks === 0) return true
    
    // lock 새로 만들기
    const newLock = Array.from(Array(N*3), () => Array(N*3).fill(2))
    for (let i=N; i<N*2; i++){
        for (let j=N; j<N*2; j++){
            newLock[i][j] = lock[i-N][j-N]
        }
    }
    
    const newN = newLock.length
    
    // key 회전하며 열쇠를 자물쇠에 시도하기
    for (let d=0; d<4; d++){
        key = rotate(key, M)
        
        for (let i=0; i<newN - M + 1; i++){
            for (let j=0; j<newN - M + 1; j++){
                
                let cnt = 0
                let flag = true
                for (let k=0; k<key.length; k++){
                    for (let l=0; l<key[0].length; l++){
                        
                        if (key[k][l] === 1 && newLock[i+k][j+l] === 0) cnt++
                        if (key[k][l] === 1 && newLock[i+k][j+l] === 1) flag = false
                    }
                }
                if (cnt === blanks && flag) return true
            }
        }
    }
    
    
    return false
}