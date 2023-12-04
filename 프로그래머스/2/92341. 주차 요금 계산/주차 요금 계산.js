// 분으로 통일
const convertTime = time => {
    const [h, m] = time.split(':')
    return Number(h) * 60 + Number(m)
}

const solution = (fees, records) => {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees
    const carDict = {}
    const carStatusDict = {}
    
    for (const record of records) {
        let [time, carNum, status] = record.split(' ')
        time = convertTime(time)
        
        if (!(carNum in carDict)) carDict[carNum] = 0
        
        if (status === "IN") {
            carStatusDict[carNum] = ["IN", time]
        } else if (status === "OUT") {
            carDict[carNum] += time - carStatusDict[carNum][1]
            carStatusDict[carNum] = ["OUT", time]
        }
    }
    
    const leftRecords = Object.entries(carStatusDict)
    for (const record of leftRecords) {
        if (record[1][0] === "OUT") continue  // 출차하지 않은 차량들만 계산
        carDict[record[0]] += convertTime('23:59') - carStatusDict[record[0]][1]
    }
    
    for (const carInfo of Object.entries(carDict)) {
        const [carNum, timeSum] = carInfo
        if (timeSum <= defaultTime) {
            carDict[carNum] = defaultFee
        } else {
            carDict[carNum] = defaultFee + Math.ceil((timeSum - defaultTime) / unitTime) * unitFee
        }
    }
    return Object.entries(carDict).sort((a,b) => a[0] - b[0]).map(car => car[1])
}