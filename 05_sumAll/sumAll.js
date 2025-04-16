const sumAll = function(num1, num2) {
  if (num1 < 0 ||
      num2 < 0 ||
      !Number.isInteger(num1) ||
      !Number.isInteger(num2)
  ) return 'ERROR';

  let sumTotal = 0;
  if (num1 < num2) {
    for (let i=num1; i<=num2; i++) {
      sumTotal += i;
    }
  } else {
    for (let i=num2; i<=num1; i++) {
      sumTotal += i;
    }
  }

  return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
