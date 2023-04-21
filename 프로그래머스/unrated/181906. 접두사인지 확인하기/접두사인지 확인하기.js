function solution(my_string, is_prefix) {
    for (let i=0; i<my_string.length; i++){
        if (is_prefix === my_string.slice(0, i+1)) return 1
    }
    return 0
}