function solution(a, b) {
     const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT')
     const today = new Date(`${2016}-${a}-${b}`).getDay()
     const todayLabel = week[today]
     return todayLabel
}