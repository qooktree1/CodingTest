const solution = (lottos, winNums) => {
  const rankMap = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };
  const zeroCnt = lottos.filter((lotto) => lotto === 0).length;
  const winCnt = lottos.filter((lotto) => winNums.includes(lotto)).length;
  return [rankMap[String(zeroCnt + winCnt)] ?? 6, rankMap[String(winCnt)] ?? 6];
};