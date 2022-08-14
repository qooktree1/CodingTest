function solution(s) {
    let result = ""
    const numbers = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    }
    const newS = s.split("")
    let tmp = ""
    for (let i=0; i<newS.length; ++i){
        
        if (!isNaN(newS[i])){
            result += newS[i]
        } else {
            tmp += newS[i]
            if (numbers[tmp] !== undefined) {
                result += numbers[tmp]
                tmp = ""
            }
        }
        
    }
    return Number(result)
}