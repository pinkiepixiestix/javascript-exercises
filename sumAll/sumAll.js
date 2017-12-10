var sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') return ("ERROR");
  let sum = 0;
  let largerNumber = 0;
  let smallerNumber = 0;

  if (num1 > num2) { largerNumber = num1; smallerNumber = num2; }
  else { largerNumber = num2; smallerNumber = num1; }

  for (let i = smallerNumber; i <= largerNumber; i++) sum += i;

  return sum;
}

module.exports = sumAll
