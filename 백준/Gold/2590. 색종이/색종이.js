const fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

const confetti = []
for (let i=0; i<6; i++) confetti.push(Number(input.shift().trim()))
let answer = 0

// 변이 6인 색종이 Count
answer += confetti.pop()

// 변이 5인 색종이 Count
while (confetti[4] > 0){
    confetti[4] -= 1
    confetti[0] -= 11  // 변이 1인 색종이 사용
    answer += 1
}

// 변이 4인 색종이 Count
while (confetti[3] > 0){
    confetti[3] -= 1
    let index = 20  // 전체 영역

    // 나머지 칸은 2인 색종이 사용 - 5장 사용 가능
    if (confetti[1] >= 5){
        index -= 20
        confetti[1] -= 5
    } else {
        index -= 4 * confetti[1]
        confetti[1] = 0
    }
    confetti[0] -= index  // 나머지 칸은 1인 색종이 사용
    answer += 1
}

// 변이 3인 색종이 Count
while (confetti[2] > 0){
    let index = 36  // 전체 영역

    // 변이 3인 색종이가 4 이상인 경우
    if (confetti[2] >= 4) {
        confetti[2] -= 4
        index -= 36
    }

    // 변이 3인 색종이를 3개 사용한 경우
    else if (confetti[2] === 3){
        confetti[2] -= 3
        index -= 27

        // 변이 2인 색종이 사용
        if  (confetti[1] > 0){
            confetti[1] -= 1
            index -= 4
        }
    }

    // 변이 3인 색종이를 2개 사용한 경우
    else if (confetti[2] === 2){
        confetti[2] -= 2
        index -= 18

        // 변이 2인 색종이 사용 - 3개 사용 가능
        while (confetti[1] > 0 && index > 6){
            confetti[1] -= 1
            index -= 4
        }
    }

    // 변이 3인 색종이를 1개 사용한 경우
    else if (confetti[2] === 1){
        confetti[2] -= 1
        index -= 9

        // 변이 2인 색종이 사용 - 4개 사용 가능
        while (confetti[1] > 0 && index > 7){
            confetti[1] -= 1
            index -= 4
        }
    }

    // 변이 3인 색종이 사용하지 않는 경우
    else {
        // 변이 2인 색종이 사용
        while (confetti[1] > 0 && index >= 4){
            confetti[1] -= 1
            index -= 4
        }
    }

    confetti[0] -= index  // 변이 1인 색종이 사용
    answer += 1
}

// 변이 2인 색종이 Count
while (confetti[1] > 0){
    let index = 36  // 전체 영역

    // 변이 2인 색종이 사용
    while (confetti[1] > 0 && index >= 4){
        confetti[1] -= 1
        index -= 4
    }

    confetti[0] -= index  // 변이 1인 색종이 사용
    answer += 1
}

// 변이 1인 색종이 Count
while (confetti[0] > 0){
    let index = 36
    confetti[0] -= index  // 변이 1인 색종이 사용
    answer += 1
}

console.log(answer)