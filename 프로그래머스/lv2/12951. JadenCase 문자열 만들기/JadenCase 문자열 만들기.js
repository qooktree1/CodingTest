function solution(s) {
    const array = s.split(" ")
    
    const answer = array.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    return answer.join(" ")
}