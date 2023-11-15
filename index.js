// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(game => game.result === 'W');
  
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }
  