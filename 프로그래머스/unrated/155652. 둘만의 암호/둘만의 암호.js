function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    s = s.split("")
    const answer = []
    for (let i=0; i<s.length; i++){
        
        let a = alphabet.indexOf(s[i])
        for (let i=0; i<index; i++){
            a = (a+1)%26
            while (true){
                let check = false
                if (skip.includes(alphabet[a])){
                    a = (a+1) % 26
                    check = true
                }
                if (check === false) break
            }
        }
        answer.push(alphabet[a])
    }
    return answer.join("")
}