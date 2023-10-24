// 객체 만들고 value로 이루어진 배열로 바꾸기
const createClothObject = (clothes) => {
    const clothObject = {}
    for (const cloth of clothes) {
        if (cloth[1] in clothObject) clothObject[cloth[1]] += 1
        else clothObject[cloth[1]] = 1
    }
    return [...Object.values(clothObject)]
}

const solution = clothes => {
    const clothArr = createClothObject(clothes)
    let answer = 0
    console.log(clothArr)
    answer += clothArr.reduce((a,b) => a * (b + 1), 1)  // 입지 않는 경우까지 포함해서 곱하기
    return answer - 1  // 아무것도 입지 않는 경우 빼기
}