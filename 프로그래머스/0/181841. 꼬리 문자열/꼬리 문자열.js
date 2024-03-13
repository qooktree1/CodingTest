const solution = (strList, ex) => strList.map(str => {
    if (!str.includes(ex)) return str
}).join('')