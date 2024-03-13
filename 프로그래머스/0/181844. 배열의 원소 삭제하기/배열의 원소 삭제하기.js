const solution = (arr, deleteList) => {
    const deleteObj = {}
    deleteList.forEach(num => deleteObj[num] = true)
    return arr.filter(num => !deleteObj[num] && num)
}