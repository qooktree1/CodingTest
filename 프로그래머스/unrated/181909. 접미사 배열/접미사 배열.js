function solution(my_string) {
    const allString = []
    for (let i=0; i<my_string.length; i++){
        allString.push(my_string.slice(my_string.length-2-i))
    }
    return allString.sort((a,b) => a.localeCompare(b))
}