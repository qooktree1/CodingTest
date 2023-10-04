const solution = (idList, reports, k) => {
    const reportDict = {}
    const reportConnection = {}
    const ans = []
    
    for (const id of idList){
        reportDict[id] = 0
        reportConnection[id] = []
    }
    
    for (const report of reports){
        const [from, to] = report.split(" ")
        if (!reportConnection[from].includes(to)){
            reportConnection[from].push(to)
            reportDict[to] += 1  // 신고받은 횟수 저장
        }
    }
    
    for (const id of idList){
        let cnt = 0
        for (const reportId of reportConnection[id]){
            if (reportDict[reportId] >= k){
                cnt++
            }
        }
        ans.push(cnt)

    }
    return ans
}