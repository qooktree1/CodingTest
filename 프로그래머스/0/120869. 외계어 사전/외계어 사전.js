/** word에 checkWord가 포함되어 있는지 확인하는 함수 */
const isIncluding = (word, checkWord) => {
    const checkWordLen = checkWord.length;
    for (let i=0; i<word.length - checkWordLen + 1; i++) {
        if (word.slice(i, checkWordLen + i) === checkWord) return true
    }
    return false
}

/** spell의 알파벳들과 비교하여 모두 사용한 단어가 dic에 존재하는지 여부를 판별하는 함수  */
const isPossibleInDictionary = (word, spell) => {
  for (let i = 0; i < spell.length; i++) {
    if (!isIncluding(word, spell[i])) return false;
  }
  return true;
};

const solution = (spell, dic) => {
  for (let i = 0; i < dic.length; i++) {
    if (isPossibleInDictionary(dic[i], spell)) return 1;
  }
  return 2;
};