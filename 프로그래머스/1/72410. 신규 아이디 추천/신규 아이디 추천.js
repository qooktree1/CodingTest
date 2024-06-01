const solution = newId => {
    // 1단계
    newId = newId.toLowerCase()
    
    // 2단계
    newId = newId.replace(/[^a-z0-9\-_.]/g, "")
    
    // 3단계
    newId = newId.replace(/\.{2,}/g, '.');
    
    // 4단계
    if (newId[0] === '.') newId = newId.substring(1)
    if (newId[newId.length - 1] === '.') newId = newId.substring(0, newId.length - 1);
    
    // 5단계
    newId = newId.length ? newId : ["a"]
    
    // 6단계
    if (newId.length >= 16) newId = newId.slice(0, 15);
    if (newId[newId.length - 1] === '.') newId = newId.substring(0, newId.length - 1);
    
    // 7단계
    while (newId.length <= 2) newId += newId[newId.length - 1]
    
    return newId
}