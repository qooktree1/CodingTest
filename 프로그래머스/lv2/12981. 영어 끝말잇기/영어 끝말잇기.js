// 문제: 영어 끝말잇기
// 시간: 21분
// 알고리즘: slice, includes 활용
const solution = (n, words) => {
    for (let i=1; i<words.length; i++){
        if (words.slice(0, i).includes(words[i])
            ||
            words[i-1][words[i-1].length-1] !== words[i][0]
           ) return [i % n + 1, parseInt(i/n)+1]  // 첫번째 인자 - 번호, 두번째 인자 - 반복한 차례
    }
    return [0, 0]
}