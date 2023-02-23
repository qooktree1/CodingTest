function solution(spell, dic) {
    for (const d of dic){
        const dArray = d.split("")
        let check = 0
        for (const s of spell){
            if (d.includes(s) === true &&  dArray.filter(x => x === s).length === 1) check += 1
        }
        
        if (check === spell.length) return 1
    }
    
    return 2
}