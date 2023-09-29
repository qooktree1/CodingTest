const distCalc = (left, right, pos) => {
    const leftDist = Math.abs(pos[0] - left[0]) + Math.abs(pos[1] - left[1])
    const rightDist = Math.abs(pos[0] - right[0]) + Math.abs(pos[1] - right[1])
    if (rightDist > leftDist) return "left"
    else if (rightDist < leftDist) return "right"
    else return 0
}


const solution = (numbers, hand) => {
    const keypad = {
        "1": [0, 0], "2": [0, 1], "3": [0, 2],
        "4": [1, 0], "5": [1, 1], "6": [1, 2],
        "7": [2, 0], "8": [2, 1], "9": [2, 2],
        "*": [3, 0], "0": [3, 1], "#": [3, 2]
    }
    let [leftHand, rightHand] = [keypad["*"], keypad["#"]]
    let ans = ""
    numbers.forEach(number => {
        if (number === 1 || number === 4 || number === 7){
            ans += "L"
            leftHand = keypad[String(number)]
        } else if (number === 3 || number === 6 || number === 9){
            ans += "R"
            rightHand = keypad[String(number)]
        } else {
            const result = distCalc(leftHand, rightHand, keypad[String(number)])
            if (result === "left"){
                ans += "L"
                leftHand = keypad[String(number)]
            } else if (result === "right"){
                ans += "R"
                rightHand = keypad[String(number)]
            } else if (result === 0 && hand === "right") {
                ans += "R"
                rightHand = keypad[String(number)]
            } else if (result === 0 && hand === "left") {
                ans += "L"
                leftHand = keypad[String(number)]
            }
        }
    })
    return ans
}