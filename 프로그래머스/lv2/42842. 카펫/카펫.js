// 문제: 카펫
// 시간: 16분
// 알고리즘: 이차방정식 작성
// x: 가로, y: 세로, xy = brown + yellow, (x-2)(y-2) = yellow

function solution(brown, yellow) {
    
    for (let i=1; i<=Math.max(brown, yellow); i++){
        const row = i
        const col = (brown + yellow) / i
        
        if (brown + yellow === yellow - 4 + 2 * row + 2 * col){
            return [col, row]
        }
    }
}