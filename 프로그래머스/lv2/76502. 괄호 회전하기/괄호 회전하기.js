// 문제: 괄호 회전하기
// 시간: 26분
// 알고리즘: stack


const solution = s => {
    const n = s.length
    let wrong = 0
    for (let i=0; i<n; i++){
        const stack = []
        let flag = false
        for (let i=0; i<s.length; i++){
            if (!stack) stack.push(s[i])
            else if (s[i] === "]" || s[i] === "}" || s[i] === ")"){
                if (s[i] === "]" && stack[stack.length-1] === "[") stack.pop()
                else if (s[i] === "}" && stack[stack.length-1] === "{") stack.pop()
                else if (s[i] === ")" && stack[stack.length-1] === "(") stack.pop()
                else {
                    wrong++
                    flag = true
                    break
                }
            } else stack.push(s[i])
        }
        if (flag === false && stack.length !== 0) wrong++
        const a = s[0]
        const b = s.slice(1)
        s = b + a
    }
    return n - wrong
}