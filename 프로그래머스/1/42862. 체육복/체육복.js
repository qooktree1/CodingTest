const solution = (n, lost, reserve) => {
    const students = new Array(n).fill(1)
    for (let i=0; i<lost.length; i++) students[lost[i] - 1]--
    for (let i=0; i<reserve.length; i++) students[reserve[i] - 1]++
    
    for (let i=0; i<n; i++) {
        if (students[i] === 0) {
            if (i === 0 && students[1] >= 2) {
                students[i]++
                students[i+1]--
            } else if (i == n-1 && students[n-2] >= 2) {
                students[i]++
                students[n-2]--
            } else if (students[i-1] >= 2) {
                students[i]++
                students[i-1]--
            } else if (students[i+1] >= 2) {
                students[i]++
                students[i+1]--
            }
        }
    }
    return students.filter(student => student >= 1).length
}