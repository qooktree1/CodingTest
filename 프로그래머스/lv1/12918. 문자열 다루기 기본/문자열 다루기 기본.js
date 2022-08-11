function solution(s) {
    const a = s.split("")
    if (a.length === 4 || a.length === 6){
        for (let i=0; i<a.length; ++i) {
            if (isNaN(a[i])){
                return false
            }
        }
        return true
    } else {
        return false
    }
}