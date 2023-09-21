const solution = s => {
    let ans = ""
    const numberDict = {
        "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5",
        "six": "6", "seven": "7", "eight": "8", "nine": "9"
    }
    let tmp = ""
    for (let i=0; i<s.length; i++){
        if (numberDict[tmp]){
                ans += numberDict[tmp]
                tmp = ""
            }
        if (!isNaN(s[i])){
            ans += s[i]
            tmp = ""
        }
        else if (isNaN(s[i])) tmp += s[i]
    }
    if (tmp.length > 0) ans += numberDict[tmp]
    
    return Number(ans)
}