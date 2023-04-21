function solution(my_string) {
    let alphabet = ["a", "b", "c", "d", "e", "f",
                     "g", "h", "i", "j", "k", "l",
                     "m", "n", "o", "p", "q", "r",
                     "s", "t", "u", "v", "w", "x",
                     "y", "z"]
    alphabet = [...["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
                   "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], ...alphabet]
    const ans = Array(52).fill(0)
    for (let i=0; i<my_string.length; i++){
        ans[alphabet.indexOf(my_string[i])]++
    }
    return ans
}