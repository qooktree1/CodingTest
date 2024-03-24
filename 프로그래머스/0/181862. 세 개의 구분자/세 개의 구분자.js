const solution = myStr => {
    const answer = myStr.split(/a|b|c/).filter(x => x)
    return answer.length > 0 ? answer : ["EMPTY"]
}