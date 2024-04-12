const countMatches = (items, ruleKey, ruleValue) => {
    let [keyIndex, answer] = [0, 0]
    if (ruleKey === "color") keyIndex = 1
    else if (ruleKey === "name") keyIndex = 2
    
    for (let i=0; i<items.length; i++) {
        if (ruleValue === items[i][keyIndex]) answer++
    }
    return answer
}