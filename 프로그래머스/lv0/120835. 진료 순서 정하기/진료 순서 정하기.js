function solution(emergency) {
    const sortEmergency = emergency.slice().sort((a,b) => b-a)
    return emergency.map(x => sortEmergency.indexOf(x)+1)
}