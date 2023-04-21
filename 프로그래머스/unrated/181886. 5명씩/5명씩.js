function solution(names) {
    return names.map((name, i) => {
        if (i % 5 === 0) return name
    }).filter(x => x)
}