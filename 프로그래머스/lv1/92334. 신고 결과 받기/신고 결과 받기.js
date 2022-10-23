function solution(id_list, report, k) {
    const fixedReport = [...new Set(report)] // 중복 제
    const reportedId = []
    const reported = Array(id_list.length).fill(0) // 신고 count 배열
    const mail = Array(id_list.length).fill(0) // 결과 메일 배열
    
    for (let r of fixedReport){
        const [a, b] = r.split(" ") // a: 신고한 ID, 신고받은 ID
        reported[id_list.indexOf(b)] += 1 // 신고받은 ID에 1씩 증가
        
        // 신고수가 k개 이상인 경우
        if (reported[id_list.indexOf(b)] >= k){
            reportedId.push(id_list[id_list.indexOf(b)])
        }
    }
    
    fixedReport.map((r) => {
        const [a, b] = r.split(" ")
        
        // 유저가 신고한 ID(b)와 정지된 ID가 같을때 찾기
        if (reportedId.indexOf(b) >= 0){
            mail[id_list.indexOf(a)] += 1
        }
    })
    
    return mail
    
    
}