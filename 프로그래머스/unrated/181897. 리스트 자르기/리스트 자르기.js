function solution(n, slicer, num_list) {
    const [a, b, c] = [slicer[0], slicer[1], slicer[2]]
    const ans = []
    if (n === 1) return num_list.slice(0, b+1)
    if (n === 2) return num_list.slice(a)
    if (n === 3) return num_list.slice(a, b+1)
    if (n === 4){
        for (let i=a; i<=b; i+= c){
            ans.push(num_list[i])
        }
        return ans
    }
}