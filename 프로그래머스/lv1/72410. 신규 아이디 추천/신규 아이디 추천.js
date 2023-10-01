const solution = newId => {
    newId = newId.toLowerCase()  // 1단계
    
    // 2단계
    let nnewId = []
    for (const id of newId){
        if ("-._".includes(id) || /[a-z0-9]/.test(id)) nnewId.push(id)
    }
    newId = nnewId
    
    // 3단계
    nnewId = []
    for (let i=0; i<newId.length-1; i++){
        if (newId[i] === "." && newId[i+1] === ".") continue
        else nnewId.push(newId[i])
    }
    nnewId.push(newId[newId.length - 1])
    newId = nnewId.slice()
    
    // 4단계
    if (newId[0] === ".") newId.shift()
    if (newId[newId.length - 1] === ".") newId.pop()
    
    if (newId.length === 0) newId.push("a")  // 5단계
    
    
    // 6단계
    if (newId.length >= 16){
        newId = newId.slice(0, 15)
        if (newId[newId.length - 1] === ".") newId.pop()
    }
    
    // 7단계
    while (newId.length <= 2){
        newId.push(newId[newId.length - 1])
    }
    return newId.join("")
}