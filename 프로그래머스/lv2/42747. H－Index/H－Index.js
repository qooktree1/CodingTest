// 문제: H-Index
// 시간: 6분
// 알고리즘: sort

const solution = citations => {
    citations.sort((a,b) => b-a)
    for (let i=0; i<citations.length; i++){
        if (citations[i] <= i) return i
    }
    return citations.length
}