function solution(A, B) {
    if (A == B) return 0
    else {
        let answer = 0
        for (let i=0; i<A.length; i++){
            A = A.slice(A.length-1) + A.slice(0, A.length-1)
            answer += 1
            if (A == B) return answer
        }
        
        return -1
    }
}