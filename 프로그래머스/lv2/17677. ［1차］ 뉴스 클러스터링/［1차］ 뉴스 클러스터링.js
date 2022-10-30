function intersectionFunc(arr1, arr2){
    let cnt = 0
    const visited = Array(arr2.length).fill(0)
    
    for (let i=0; i< arr1.length; i++){
        for (let j=0; j< arr2.length; j++){
            // 원소가 같고 방문하지 않았을때 count
            if (arr1[i] === arr2[j] && visited[j] === 0){
                cnt += 1
                visited[j] = 1  // arr2의 방문 표시
                break  // 다음 arr1의 원소를 검색하기 위해
            }
        }
    }
    return cnt  // 교집합
}

function solution(str1, str2) {
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    const regex = /^[a-z|A-Z]+$/; // 영문자
    const arr1 = []
    const arr2 = []
    for (let i=0; i< str1.length - 1; i++){
        if (regex.test(str1.slice(i, i+2))){
            arr1.push(str1.slice(i, i+2))
        }
    }
    for (let i=0; i< str2.length - 1; i++){
        if (regex.test(str2.slice(i, i+2))){
            arr2.push(str2.slice(i, i+2))
        }
    }
    
    let intersection
    // 자카드 유사도 구학기 -> 길이가 작은 값을 함수에 첫번째 인자로 입력
    if (arr1.length > arr2.length){
        intersection = intersectionFunc(arr2, arr1)
    } else {
        intersection = intersectionFunc(arr1, arr2)
    }
    
    const union = arr1.length + arr2.length - intersection
    if (intersection === 0) return 65536 // 교집합이 공집합일때
    
    return parseInt((intersection / union) * 65536)
}