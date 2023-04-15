// 문제: 귤 고르기
// 시간: 12분
// 알고리즘: dictionary 사용


const solution = (k, tangerine) => {
    let ans = 0
    const dict = {}
    
    for (let i=0; i<tangerine.length; i++){
        if (dict[tangerine[i]] === undefined){
            dict[tangerine[i]] = 1
        } else dict[tangerine[i]]++
    }
    
    const fruits = Object.values(dict).map(i => i)  // 각 과일별 개수 배열
    fruits.sort((a,b) => b-a)
    
    for (let i=0; i<fruits.length; i++){
        k -= fruits[i]
        ans++
        
        if (k <= 0){
            break
        }
    }
    
    return ans
}