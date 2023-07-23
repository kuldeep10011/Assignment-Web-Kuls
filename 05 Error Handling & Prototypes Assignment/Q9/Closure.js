function numberChecker(numbersArray) {
    return function(targetNumber) {
      return numbersArray.includes(targetNumber);
    };
  }
  
  const numbersArray = [1, 3, 5, 7, 9];
  const checkNumber = numberChecker(numbersArray);
  
  console.log(checkNumber(5)); 
  console.log(checkNumber(2));