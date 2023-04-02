function solution(A, B) {
    A.sort((a,b) => a-b)
    B.sort((a,b) => a-b)
    let answer = 0
    let index = 0  // A팀 배열을 움직일 인덱스
    console.log(A, B)
    for (let i=0; i<A.length; i++){
        
        if (A[index] < B[i]){  // 큰 숫자 나오면 A 인덱스 한칸 이동 후 승점 부여
            answer++
            index++
        }
    }
    return answer
}
// 1 3 5 7
// 2 2 6 8