// 문제: 구명보트
// 시간:
// 알고리즘: 앞에서, 뒤에서 찾아보며 적절한 무게 찾기, 투포인터
// 한명씩 타야하는 인원은 check

const solution = (people, limit) => {
    people.sort((a,b) => a-b)
    let [s, e] = [0, people.length-1]  // 투포인터
    let ans = 0
    
    while (s <= e){
        if (s === e){  // 마지막 사람 구출
            ans++
            break
        }
        
        if (people[s] + people[e] <= limit){  // 합쳐서 구출
            ans++
            s++
            e--
        }
        
        else{  // 몸무게 큰 사람 구출
            ans++
            e--
        }
    }
    
    return ans
}