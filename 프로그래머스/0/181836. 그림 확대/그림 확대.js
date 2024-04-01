const solution = (picture, k) => {
  const answer = [];
  picture.forEach((str) => {
    let tmp = "";
    for (let i = 0; i < str.length; i++) tmp += str[i].repeat(k);
    for (let i = 0; i < k; i++) answer.push(tmp);
  });
  return answer;
};
