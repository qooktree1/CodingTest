function solution(my_string, queries) {
    for (const query of queries){
        my_string = my_string.slice(0, query[0]) + my_string.slice(query[0], query[1]+1).split("").reverse().join("") + my_string.slice(query[1]+1)
    }
    return my_string
}