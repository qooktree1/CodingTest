function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5
    
    let cache = []
    let answer = 0
    cities.forEach((city) => {
        city = city.toUpperCase()
        
        if (cache.includes(city)){
            answer += 1
            
            cache = cache.filter((x) => x !== city)
            
            cache.push(city)
        } else {
            answer += 5
            if (cache.length < cacheSize){
                cache.push(city)
            } else {
                cache.shift()
                cache.push(city)
            }
        }
    })
    return answer
}