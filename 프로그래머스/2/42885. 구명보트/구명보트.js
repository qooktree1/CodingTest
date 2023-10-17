// 보트에는 최대 2명씩 밖에 못탄다.
// Greedy를 어떻게 적용할까?
// 투포인터를 적용해보자!
const solution = (people, limit) => {
    const sortedPeople = people.slice().sort((a,b) => a-b)
    let [start, end] = [0, sortedPeople.length - 1]
    let boats = 0
    while (start <= end){
        const twoPersonWeight = sortedPeople[start] + sortedPeople[end]
        if (twoPersonWeight <= limit) start++
        boats++
        end--
        
    }
    
    return boats
}