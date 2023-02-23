function solution(my_string) {
    const newString = my_string.split(" ")
    const answerString = []
    for (let str of newString){
        const tmp = str.split("")
        const newTmp = []
        for (let i=0; i<tmp.length; i++){
            if (tmp[i] !== "a" && tmp[i] !== "e" && tmp[i] !== "i" && tmp[i] !== "o" && tmp[i] !== "u") newTmp.push(tmp[i])
        }
        answerString.push(newTmp.join(""))
    }
    return answerString.join(" ")
}