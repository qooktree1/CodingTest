function solution(genres, plays) {
    const arr = {}
    const arr2 = {}
    const answer = []
    for (let i=0; i<genres.length; i++){
        if (arr[genres[i]] === undefined){
            arr[genres[i]] = []
            arr2[genres[i]] = 0
        }
        arr[genres[i]].push([plays[i], i])
        arr2[genres[i]] += plays[i]
    }
    
    const genreSort = Object.keys(arr2).map(key => [key, arr2[key]])
    genreSort.sort((a,b) => b[1] - a[1])
    
    
    
    for (let i=0; i<genreSort.length; i++){
        const tmp = arr[genreSort[i][0]]
        tmp.sort((a,b) => b[0] - a[0])
        for (let i=0; i < Math.min(2, tmp.length); i++){
            answer.push(tmp[i][1])
        }
    }
    return answer
}