const solution = (arr, k) => {
    const arrSet = [...new Set(arr)]
    return [...arrSet.slice(0, k), ...Array(Math.max(k-arrSet.length, 0)).fill(-1)]
}