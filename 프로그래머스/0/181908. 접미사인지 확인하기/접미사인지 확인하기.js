const solution = (myString, isSuffix) => {
    return isSuffix.length <= myString.length && myString.lastIndexOf(isSuffix) === myString.length - isSuffix.length ? 1 : 0
}