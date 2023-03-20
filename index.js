//code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ];
//   const year =record.find(superbowlWin).year;
// function superbowlWin(record) {
//     if (record === "W") {
//         return record.year;
//     }
//     // else {
//     //     return "sadly";
//     //}

// }
function superbowlWin(record) {
    let winningYear;
    record.find(function(obj) {
      if (obj.result === "W") {
        winningYear = obj.year;
        return true;
      }
    });
    return winningYear;
  }
  