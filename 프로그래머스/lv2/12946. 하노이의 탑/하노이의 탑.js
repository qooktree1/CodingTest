// 문제: 하노이의 탑
// 시간: 40분 - Google
// 알고리즘: DFS
// A기둥의 (n-1)번째 원판을 B기둥으로 이동시킨다.
// A기둥의 n번째 원판을 C기둥으로 이동시킨다.
// B기둥의 (n-1)번째 원판을 C기둥으로 이동시킨다.

const solution = n => {
    let ans = []
    
    const hanoi = (n, start, mid, end) => {
        if (n === 1) ans.push([start, end])
        else {
            hanoi(n-1, start, end, mid)
            ans.push([start, end])
            hanoi(n-1, mid, start, end)
        }
    }
    hanoi(n, 1, 2, 3)
    return ans
}