function solution(my_string, target) {
    for (let i=0; i<my_string.length - target.length + 1; i++){
        if (target === my_string.slice(i, i + target.length)) return 1
    }
    return 0
}