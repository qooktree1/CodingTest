const solution = record => {
    const userDict = {}
    const recordArr = []
    
    for (let i=0; i<record.length; i++) {
        const [status, id, name] = record[i].split(" ")
        if (status === "Enter" || status === "Change") userDict[id] = name
        if (status !== "Change") recordArr.push([id, status])
    }
    
    return recordArr.map(arr => {
        const name = userDict[arr[0]]
        const status = arr[1] === "Enter" ? "들어왔습니다." : "나갔습니다."
        return `${name}님이 ${status}`
    })
}