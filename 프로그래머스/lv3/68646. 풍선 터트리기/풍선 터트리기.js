// 문제: 풍선 터트리기

// 왼쪽과 오른쪽 방향에서 풍선을 터트리면 최솟값만 남기면 그 풍선들은 최후의 생존이 가능하다

// [-16, -16, -16, -16, -16, -92, -92, -92, -92, -92] -> 왼쪽부터 시작해서 현재 인덱스까지 가장 작은 풍선들의 배열
// [-92, -92, -92, -92, -92, -92, -71, -68, -61, -33] -> 오른쪽부터 시작해서 현재 인덱스까지 가장 작은 풍선들의 배열
// 인접한 두 풍선이 만나더라도 큰 풍선을 최대 1번 터트릴 수 있기 때문에 최후의 생존이 가능

const solution = a => {
    let size = a.length
    let left = new Array(size)
    let right = new Array(size)
    left[0] = a[0]
    right[size-1] = a[size-1]
    
    for (let i=1; i<size; i++){
        left[i] = Math.min(left[i-1], a[i])
    }
    for (let i=size-2; i >= 0; i--){
        right[i] = Math.min(right[i+1], a[i])
    }
    const ans = new Map()
    // console.log(left, right)
    
    for (let i=0; i<size; i++){
        ans.set(left[i])
        ans.set(right[i])
    }
    return ans.size
}