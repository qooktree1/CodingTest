const solution = (idList, reports, k) => {
    const reportList = {}
    const reportSuccessIdList = {}
    for (const id of idList) reportSuccessIdList[id] = 0
    reports = [...new Set(reports)]
    
    for (const report of reports) {
        const [reporter, reported] = report.split(" ")
        if (!reportList[reporter]) {
            reportList[reporter] = [reported]
        } else {
            reportList[reporter].push(reported)
        }
    }
    for (const id of Object.values(reportList).flat()) reportSuccessIdList[id]++
    
    return idList.map(id => {
        let reportCnt = 0
        if (!reportList[id]) return 0
        for (const reportedId of reportList[id]) {
            if (reportSuccessIdList[reportedId] >= k) reportCnt++
        }
        return reportCnt
    })
}