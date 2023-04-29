// 문제: 택배상자
// 시간: 34분
// 알고리즘: 컨테이너 벨트의 상자들을 (보조 컨테이너 or 트럭) 에 싣는다, 보조 컨테이너의 마지막 값 == 현재 순서일시 아닐때까지 pop


const solution = order => {
    let stack = []
    let index = 0  // 트럭에 실은 상자의 개수
    let s = 1
    while (s <= order.length){
        stack.push(s)
        
        while (stack.length > 0 && stack[stack.length-1] == order[index]){
            stack.pop()
            index++
        }
        
        s++
    }
    return index
}