function solution(arr, delete_list) {
    const ans = []
    for (const num of arr){
        if (!delete_list.includes(num)) ans.push(num)
    }
    return ans
}