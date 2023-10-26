const solution = (cacheSize, cities) => {
    let cache = []
    let answer = 0
    let cacheCnt = 0
    
    if (cacheSize === 0) return cities.length * 5
    
    for (let city of cities) {
        city = city.toLowerCase()
        const findCity = cache.indexOf(city)
        if (findCity !== -1) {
            const index = findCity
            cache.splice(index, 1)
            cache.push(city)
            answer++
        } else {
            answer += 5
            if (cacheCnt < cacheSize) {
                cache.push(city)
                cacheCnt++
            } else {
                cache.shift()
                cache.push(city)
            }
        }
    }
    return answer
}