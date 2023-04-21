function solution(num_list) {
    let [odd, even] = [0, 0]
    for (let i=0; i<num_list.length; i++){
        if (i % 2) even += num_list[i]
        else odd += num_list[i]
    }
    
    return odd < even ? even : odd
}