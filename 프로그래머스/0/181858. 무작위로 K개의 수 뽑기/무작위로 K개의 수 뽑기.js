const solution = (arr, k) => {
    const arrSet = [...new Set(arr)]
    return [...arrSet.slice(0, k), ...Array.from({length: k-arrSet.length}, (_) => -1)]
}