function solution(picks, minerals) {
    let answer = 0
    let len =  Math.ceil(minerals.length/5)  // 광물 5개를 연속해서 캐야 함
    let maxLen = picks.reduce((a,b) => a+b, 0)
    let arr = []
    
    if(maxLen === 0) return 0  // 곡괭이가 없을 경우
    
    minerals = minerals.splice(0,maxLen * 5)  // 곡괭이로 캘수 있는 광물까지만

    
    for(let a = 0; a < len; a++){
        let obj = {d : 0, i : 0, s:0}
        minerals.splice(0,5).map(v => obj[v[0]]++)
        console.log(minerals, obj)
        arr.push([
            obj.d * 1 + obj.i * 1 + obj.s * 1,
            obj.d * 5 + obj.i * 1 + obj.s * 1,
            obj.d * 25 + obj.i * 5 + obj.s * 1
        ])  // 다이아, 철, 돌 곡괭이로 캤을때 발생하는 피로도
        console.log(arr)
    }
    arr.sort((a,b) => b[2] - a[2]).map((v) => {  // 돌 곡괭이 피로도가 가장 많은 것이 다이아가 가장 많음 따라서 거기에 정렬
        if(picks[0] > 0) return (picks[0]--, answer+= v[0])
        if(picks[1] > 0) return (picks[1]--, answer+= v[1])
        if(picks[2] > 0) return (picks[2]--, answer+= v[2])
    })

    return answer
}