const sortAndSetTop20ShotsOnGoal = (dataArray) => {
  const sortedArray = dataArray.sort(
    ({ shotsTotal: a }, { shotsTotal: b }) => b - a
  );

  const top20ShotsOnGoal = sortedArray.slice(0, 20);

  return top20ShotsOnGoal;
};

export default sortAndSetTop20ShotsOnGoal;
