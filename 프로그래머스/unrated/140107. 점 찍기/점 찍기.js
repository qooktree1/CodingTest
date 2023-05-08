// 문제: 점 찍기
// 시간: 5분
// 알고리즘: x**2 + y**2 < d**2


const solution = (k, d) => {
    let ans = 0
    let y
    
    for (let x=0; x<=d; x+= k){  // x 좌표만큼 반복
        y = parseInt(Math.sqrt(d**2 - x**2))  // y 좌표 구하기
        ans += parseInt(y / k) + 1  // y 좌표 내의 점의 개수
    }
    return ans
}