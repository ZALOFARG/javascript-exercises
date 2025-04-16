const repeatString = function(string, num) {
  if (string === '') return '';

  let originalString = string
  
  if (num === 0) return '';
  if (num < 0) return 'ERROR';

  for (let i=1; i<num; i++){
    originalString += string;
  }

  return originalString;
};

// Do not edit below this line
module.exports = repeatString;
