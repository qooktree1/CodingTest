function solution(record) {
    const possibleResults = {}
    const result = []
    record.forEach((r) => {
        const [status, id, name] = r.split(" ")
        
        if (status === "Enter" || status === "Change"){
            possibleResults[id] = name
        }
    })
    
    record.forEach((r) => {
        const [status, id, name] = r.split(" ")
        if (status === "Enter") {
            result.push(possibleResults[id] + "님이 들어왔습니다.")
        } else if (status === "Leave") {
            result.push(possibleResults[id] + "님이 나갔습니다.")
        }
    })
    return result
}