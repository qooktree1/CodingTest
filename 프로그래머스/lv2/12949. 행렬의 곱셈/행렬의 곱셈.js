// 문제: 행렬의 곱셈
// 시간: 34분
// 알고리즘: 3중 for문


const solution = (arr1, arr2) => {
    let ans = Array.from(Array(arr1.length), () => new Array(arr2[0].length).fill(0))
    
    for (let i=0; i<arr1.length; i++){
        for (let j=0; j<arr2[0].length; j++){
            for (let k=0; k<arr1[0].length; k++){
                ans[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    
    
    
    
    return ans
}