// 문제: 호텔 대실
// 시간: 35분
// 알고리즘: Hash, Map


const solution = bookTime => {
    let ans = 0
    const timeMap = new Map()
    const check = []
    for (const time of bookTime){
        const start = Number(time[0].slice(0, 2) * 60) + Number(time[0].slice(3))
        const end = Number(time[1].slice(0, 2) * 60) + Number(time[1].slice(3)) + 10
        
        for (let i=start; i<end; i++){
            if (timeMap.get(i) === undefined) timeMap.set(i, 1)
            else timeMap.set(i, timeMap.get(i) + 1)
        }
    }

    // timeMap에서 가장 큰 value 찾기
    return [...timeMap.entries()].reduce((a,b) => a[1] > b[1] ? a : b)[1]
}