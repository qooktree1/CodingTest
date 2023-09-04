const hourToMinute = time => {
    const [h, m] = time.split(":")
    return h * 60 + m * 1
}

const minuteToHour = time => {
    let h = Math.floor(time / 60)
    h = h < 10 ? "0" + h : h
    let m = time % 60
    m = m < 10 ? "0" + m : m
    return `${h}:${m}`
}

const solution = (n, t, m, timetable) => {
    timetable = timetable
          .map(v => hourToMinute(v))
          .filter(v => v !== hourToMinute("23:59"))
    
    timetable.sort((a,b) => a-b)
    
    let start = 540
    let people = n * m
    const last = 540 + t * (n - 1)
    
    let tmp = 0
    while (n > 0){
        let tmpMinute = m
        while (tmpMinute > 0 && timetable.length !== 0){
            if (timetable[0] <= start && people){
                tmp = timetable.shift()
            }
            people--
            tmpMinute--
        }
        n--
        start += t
    }
    
    if ((timetable.length === 0 && people > 0) || !tmp) return minuteToHour(last)
    
    return minuteToHour(tmp - 1)
}