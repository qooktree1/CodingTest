function solution(myString, overwriteString, s) {
    return myString.slice(0, s) + overwriteString + myString.slice(s+overwriteString.length)
}