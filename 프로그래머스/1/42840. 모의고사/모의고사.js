const SOLUTION_METHOD = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

const PERSON = { 1: 0, 2: 0, 3: 0 };

const solution = (answers) => {
  let answersLen = answers.length;
  for (let i = 0; i < answersLen; i++) {
    if (SOLUTION_METHOD[0][i % SOLUTION_METHOD[0].length] === answers[i]) PERSON["1"]++;
    if (SOLUTION_METHOD[1][i % SOLUTION_METHOD[1].length] === answers[i]) PERSON["2"]++;
    if (SOLUTION_METHOD[2][i % SOLUTION_METHOD[2].length] === answers[i]) PERSON["3"]++;
  }
  const maxScore = Math.max(...Object.values(PERSON));
  return Object.entries(PERSON)
    .map(([person, score]) => maxScore === score && +person)
    .filter((x) => x)
    .sort();
};