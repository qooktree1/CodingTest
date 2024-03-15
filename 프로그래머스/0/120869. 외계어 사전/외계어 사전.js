/** spell의 알파벳들과 비교하여 모두 사용한 단어가 dic에 존재하는지 여부를 판별하는 함수  */
const isPossibleInDictionary = (word, spell) => {
  for (let i = 0; i < spell.length; i++) {
    if (!word.includes(spell[i])) return false;
  }
  return true;
};

const solution = (spell, dic) => {
  for (let i = 0; i < dic.length; i++) {
    if (isPossibleInDictionary(dic[i], spell)) return 1;
  }
  return 2;
};
