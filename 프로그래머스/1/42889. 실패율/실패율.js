function solution(N, stages) {
  const answer = [];
  const arr = [];
  const sortedStages = stages.sort((a, b) => b - a);
    // console.log(sortedStages)
  for (let i = 1; i < N + 1; i++) {
    const filteredStages = sortedStages.filter((item) => item === i);
      // console.log(filteredStages)
    const number = Number((filteredStages.length / stages.length));
    arr.push([number, i]);
    for (let j = 0; j < filteredStages.length; j++) {
      stages.pop();
    }
  }
  arr.sort((a, b) => b[0] - a[0]).forEach((item) => answer.push(item[1]));
  return answer;
}
/*
const solution = (N, stages) => {
    const failureRate = []
    let arrived = stages.length
    for (let i=1; i<=N; i++){
        let failureCnt = 0
        for (let j=0; j<stages.length; j++){
            if (stages[j] === i) failureCnt++
        }
        if (arrived === 0) failureRate.push([0, i])
        else {
            failureRate.push([failureCnt / arrived, i])
            arrived -= failureCnt
        }
    }
    failureRate.sort((a,b) => {
        if (b[1] - a[1]) return b[0] - a[0]
        return b[1] - a[1]
    })

    return failureRate.map(([num, rank]) => rank)
}
*/