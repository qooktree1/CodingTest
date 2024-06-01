const moveHandByDist = (leftHand, rightHand, target, hand) => {
    const leftDist = Math.abs(leftHand[0] - target[0]) + Math.abs(leftHand[1] - target[1])
    const rightDist = Math.abs(rightHand[0] - target[0]) + Math.abs(rightHand[1] - target[1])
    
    if (leftDist > rightDist) return 'right'
    if (leftDist < rightDist) return 'left'
    return hand
    
}

const solution = (numbers, hand) => {
    let answer = ""
    const keyPad = {
        '1': [0, 0], '2': [0, 1], '3': [0, 2], '4': [1, 0], '5': [1, 1], '6': [1, 2],
        '7': [2, 0], '8': [2, 1], '9': [2, 2], '0': [3, 1]
    }
    let curLeftHand = [3, 0]
    let curRightHand = [3, 2]
    
    for (const number of numbers) {
        switch (String(number)) {
            case '1':
            case '4':
            case '7':
                curLeftHand = keyPad[String(number)]
                answer += 'L'
                break;
            case '3':
            case '6':
            case '9':
                curRightHand = keyPad[String(number)]
                answer += 'R'
                break;
            default:
                const usingHand = moveHandByDist(curLeftHand, curRightHand, keyPad[String(number)], hand)
                if (usingHand === 'left') {
                    curLeftHand = keyPad[String(number)]
                    answer += 'L'
                } else {
                    curRightHand = keyPad[String(number)]
                    answer += 'R'
                }
        }
    }
    
    return answer
}