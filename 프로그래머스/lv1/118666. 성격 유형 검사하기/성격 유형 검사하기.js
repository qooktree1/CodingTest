function solution(survey, choices) {
    const mbti = {"R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0}
    const checkMBTI = ["RT", "CF", "JM", "AN"]
    for (let i=0; i < survey.length; i++){
        if (choices[i] >= 5){
            mbti[survey[i][1]] += choices[i] - 4
        } else if (choices[i] <= 4){
            mbti[survey[i][0]] += 4 - choices[i]
        }
    }
    let answer = ""
    
    // MBTI 정렬
    checkMBTI.forEach((word) => {
        if (mbti[word[0]] >= mbti[word[1]]) {
            answer += word[0]
        } else {
            answer += word[1]
        }
    })

    return answer
}