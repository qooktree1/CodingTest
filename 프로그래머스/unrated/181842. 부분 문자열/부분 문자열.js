function solution(str1, str2) {
    if (str1 === str2) return 1
    for (let i=0; i<str2.length-str1.length+1; i++){
        if (str2.slice(i, i+str1.length) === str1) return 1
    }
    return 0
}