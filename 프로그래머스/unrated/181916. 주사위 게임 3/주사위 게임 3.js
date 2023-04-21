function solution(a, b, c, d) {
    const numbers = [...new Set([a, b, c, d])]
    const origin = [a, b, c, d]
    const count = {}
    
    if (numbers.length === 1) return 1111 * numbers[0]
    
    else if (numbers.length === 2){
        origin.sort((a,b) => a - b)
            if (origin[0] === origin[1] && origin[1] === origin[2]) return (10 * origin[0] + origin[3])**2
            else if (origin[1] === origin[2] && origin[2] === origin[3]) return (10 * origin[1] + origin[0])**2
            
            else return (numbers[0] + numbers[1]) * Math.abs(numbers[0] - numbers[1])
    }
    
    
    else if (numbers.length === 3){
        for (const num of [a, b, c, d]){
            if (count[num] === undefined) count[num] = 0
            count[num]++
        }
        const check = Object.entries(count)
        let ans = 1
        for (let i=0; i<check.length; i++){
            if (check[i][1] === 1) ans *= Number(check[i][0])
        }
        return ans
    }
    else if (numbers.length === 4) return Math.min(...numbers)
}