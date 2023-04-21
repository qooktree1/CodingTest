function solution(num_list) {
    return num_list.indexOf(num_list.find(x => x < 0))
}