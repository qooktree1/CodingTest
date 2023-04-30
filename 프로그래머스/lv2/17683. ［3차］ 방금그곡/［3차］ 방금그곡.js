// 문제: [3차] 방금그곡
// 시간: 87분
// 알고리즘: replace


const solution = (m, musicinfos) => {
    let answer = []
    m = m.replace(/(C#)/g,"c").replace(/(D#)/g,"d").replace(/(F#)/g,"f").replace(/(G#)/g,"g").replace(/(A#)/g,"a")
    
    musicinfos.forEach(music => {
        let [start, end, melody, stream] = music.split(",")
        const startTime = start.split(":").map(Number)
        const endTime = end.split(":").map(Number)
        const time = (endTime[0] * 60 + endTime[1]) - (startTime[0] * 60 + startTime[1])
        
        stream = stream.replace(/(C#)/g,"c").replace(/(D#)/g,"d").replace(/(F#)/g,"f").replace(/(G#)/g,"g").replace(/(A#)/g,"a")
        
        // 이어붙이기
        const streamTmp = stream
        const mok = Math.floor(time / stream.length)
        const namoji = time % stream.length
        for (let i=0; i<mok; i++) stream += streamTmp
        
        if (mok !== 0) stream = stream + streamTmp.slice(0, namoji)
        else stream = streamTmp.slice(0, namoji)

        // 포함되어있는지 확인
        if (stream.includes(m) !== false){
            
            // 조건 일치하는게 여러 개일 경우 재생 시간 긴 음악 & 먼저 입력된 음악 제목 반환
            if (answer.length === 0 || answer[0] < time || (answer[0] === time && answer[1] > startTime)){
                    answer = [time, startTime, melody]
                }
        }
    })
    
    return answer.length > 0 ? answer[2] : "(None)"
}