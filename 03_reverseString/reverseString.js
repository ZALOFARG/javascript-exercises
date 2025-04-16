const reverseString = function(string) {

  let array = string.split("");
  let arrayR = array.reverse();
  let stringR = arrayR.join("");

  return stringR;

};

// Do not edit below this line
module.exports = reverseString;
