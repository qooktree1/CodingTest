const solution = emergency => {
    const emergencyTmp = emergency.slice().sort((a,b) => b - a)
    return emergency.map(num => emergencyTmp.indexOf(num) + 1)
}