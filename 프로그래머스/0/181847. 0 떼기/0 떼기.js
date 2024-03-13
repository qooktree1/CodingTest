const solution = nStr => {
    for (let i=0; i<nStr.length; i++) {
        if (nStr[i] !== '0') return nStr.slice(i)
    }
    return nStr
}