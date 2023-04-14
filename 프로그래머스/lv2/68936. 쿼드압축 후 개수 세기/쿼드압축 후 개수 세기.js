const answer = [0, 0]

const solution = arr => {
    divide(0, 0, arr.length, arr)
    
    return answer
}

const divide = (x, y, N, arr) => {
    for (let i=x; i<x+N; i++){
        for (let j=y; j<y+N; j++){
            if (arr[i][j] !== arr[x][y]){
                N /= 2
                divide(x, y, N, arr)
                divide(x+N, y, N, arr)
                divide(x, y+N, N, arr)
                divide(x+N, y+N, N, arr)
                return
            }
        }
    }
    answer[arr[x][y]]++
}