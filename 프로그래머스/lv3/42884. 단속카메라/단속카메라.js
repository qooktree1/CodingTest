function solution(routes) {
    routes.sort((a, b) => a[1] - b[1])
    
    camera = routes[0][1]
    answer = 1
    for (let i=1; i < routes.length; ++i) {
        if (camera < routes[i][0]) {
            answer += 1
            camera = routes[i][1]
        }
    }
    return answer
}