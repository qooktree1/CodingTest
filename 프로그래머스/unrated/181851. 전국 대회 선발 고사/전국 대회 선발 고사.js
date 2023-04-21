function solution(rank, attendance) {
    const available = []
    for (let i=0; i<attendance.length; i++){
        if (attendance[i]){
            available.push([i, rank[i]])
        }
    }
    available.sort((a,b) => a[1] - b[1])
    const [a, b, c] = [available[0][0], available[1][0], available[2][0]]
    return 10000 * a + 100 * b + c
}