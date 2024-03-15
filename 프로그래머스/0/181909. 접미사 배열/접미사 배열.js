const solution = myString => {
    const answer = []
    for (let i=0; i<myString.length; i++) {
        answer.push(myString.slice(i))
    }
    return answer.sort((a,b) => a.localeCompare(b))
}