const solution = (cacheSize, cities) => {
    let cache = []
    let answer = 0
    let cacheCnt = 0
    
    if (cacheSize === 0) return cities.length * 5
    
    for (let city of cities) {
        city = city.toLowerCase()
        const findCityIndex = cache.indexOf(city)
        if (findCityIndex !== -1) {  // city 배열에 city가 있는 경우
            answer++
            const index = findCityIndex
            cache.splice(index, 1)
        } else {
            answer += 5
            if (cacheCnt < cacheSize) cacheCnt++
            else cache.shift()  // 캐시 크기가 꽉 차면 LRU 알고리즘으로 가장 먼저 들어왔던 것 부터 pop
        }
        cache.push(city)
    }
    return answer
}