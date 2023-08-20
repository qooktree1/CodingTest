// 분으로 통합하는 함수
const convert = str => {
    const [h,m] = str.split(':').map(Number)
    return h*60+m
}


const solution = plans => {
    let answer = []
    let hash  ={}

    // plans를 순회하며 hash에 {시작시간:[과제시간,과목명]}으로 삽입.
    plans.forEach(plan=>{
        plan[1] = convert(plan[1])  // 시간 -> 분으로 변환
        plan[2] = Number(plan[2])  // 과제시간
        hash[plan[1]] = [plan[2],plan[0]]
    })

    // 시작시간기준으로 오름차순 정렬
    plans.sort((a,b)=>a[1]-b[1])


    let startTime = plans[0][1]  // 첫 시작시간
    let stack =[]  // 수행중인 과제들이 들어갈 배열
    let finish = 0  // 마친 과제의 수
    
    while(finish<plans.length){
        if(stack.length){
            stack[stack.length-1][0]--  // 1분씩 지나감
            
            // 과제시간이 0이면 stack pop
            if(stack[stack.length-1][0] === 0) {
                answer.push(stack.pop()[1])
                finish++
            }
        }

        // 과제 시작시간인 과목이 있을경우 스택에 [과제시간,과목명]추가.
        if(hash[startTime]) stack.push(hash[startTime])
        startTime++
    }
    
    return answer
}