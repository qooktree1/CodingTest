const solution = clothes => {
    const clothMap = {}
    for (const cloth of clothes) {
        clothMap[cloth[1]] = (clothMap[cloth[1]] || 0) + 1
    }
    return Object.values(clothMap).reduce((acc, cur) => acc * (cur + 1), 1) - 1
}