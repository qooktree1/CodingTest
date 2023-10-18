function solution(array, commands) {
    return commands.map((arr) => {
        const subArray = array.slice(arr[0]-1, arr[1])
        subArray.sort(function (a, b) {
            return a - b
        })
        return subArray[arr[2]-1]
    })
}