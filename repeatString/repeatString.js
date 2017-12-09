var repeatString = function(string, repeatTimes) {
  if (repeatTimes < 0) return "ERROR";
  let repeatString = "";
  for (let i = 0; i < repeatTimes; i++) {
    repeatString += string;
  }
  return repeatString;
}

module.exports = repeatString
