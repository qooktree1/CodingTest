const solution = (participants, completion) => {
  const participantMap = {};
  for (const participant of participants) {
    participantMap[participant] = participantMap[participant]
      ? participantMap[participant] + 1
      : 1;
  }

  for (const test of completion) {
    participantMap[test]--;
  }
  return Object.entries(participantMap).filter((item) => item[1] === 1)[0][0];
};
