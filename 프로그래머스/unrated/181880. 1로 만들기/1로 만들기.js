function solution(num_list) {
    let ans = 0
    for (let num of num_list){
        while (num > 1){
            if (num % 2) num = (num - 1) / 2
            else num = num / 2
            ans++
        }
    }
    return ans
}