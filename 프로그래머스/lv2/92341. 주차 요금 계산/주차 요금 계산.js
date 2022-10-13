function solution(fees, records) {
    const defaultTime = fees[0]  // 기본 시간(분)
    const defaultFee = fees[1]  // 기본 요금(원)
    const unitTime = fees[2]  // 단위 시간(분)
    const unitFee = fees[3]  // 단위 요금(원)
    
    const carNumber = {}  // 주차 시간을 넣을 객체
    const carTime = {}  // 주차 시간 계산한 값을 넣을 객체
    const sortedCarNumbers = []  // 차량 번호가 작은 자동차부터 정렬할 배열
    
    // 전체 records
    records.forEach((record) => {
        let r = record.split(" ")
        
        if (r[2] === "IN") {
            carNumber[r[1]] = r[0]
            
            
            // 주차 시간 초기화
            if (!carTime[r[1]]) {
                carTime[r[1]] = 0
                sortedCarNumbers.push(r[1])
            }
            
        } else if (r[2] === "OUT") {
            
            // 현재 시간 - 주차 시작한 시간    -> carTime 객체에 넣는 logic
            let time = carNumber[r[1]].split(":")
            carNumber[r[1]] = "finished"
            let currentTime = r[0].split(":")
            let currentFullTime = Number(currentTime[0]) * 60 + Number(currentTime[1])
            let fullTime = Number(time[0]) * 60 + Number(time[1])
            carTime[r[1]] += currentFullTime - fullTime
        }
    })
    
    for (let number in carNumber){
        // 출차된 내역이 없는 경우 23:59에 출차한 것으로 계산 후 carTime에 시간 넣는 logic
        if (carNumber[number] !== "finished"){
            let time = carNumber[number].split(":")
            let fullTime = Number(time[0]) * 60 + Number(time[1])
            let lastTime = 23 * 60 + 59
            carTime[number] += lastTime - fullTime
        }
    }
    
    // 작은 순서대로 정렬
    sortedCarNumbers.sort((a, b) => a - b)
    
    // 정렬한 배열에 시간 넣기
    const finalTime = sortedCarNumbers.map((number) => {
        return carTime[number]
    })
    
    // 주차 요금 계산 Logic
    const answer = finalTime.map((time) => {
        return time < defaultTime ? defaultFee : defaultFee + Math.ceil((time - defaultTime) / unitTime) * unitFee
    })
    return answer
}