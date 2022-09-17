function solution(operations) {
    const q = []
    operations.forEach(operation => {
        let [command, number] = operation.split(" ")
        number = parseInt(number)
        
        switch(command) {
            case "I":
                q.push(number)
                break
            case "D":
                if (q.length === 0) break
                if (number === 1) {
                    q.sort((a, b) => a - b)
                } else if (number === -1) {
                    q.sort((a, b) => b - a)
                }
                q.pop()
                break
        }
    })
    
    if (q.length) {
        q.sort((a, b) => a - b)
        return [q[q.length - 1], q[0]]
    } else return [0, 0]
}