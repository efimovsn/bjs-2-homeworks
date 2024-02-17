"use strict"  
function solveEquation(a, b, c) {  
  let arr = [];
  let discriminant = b**2-4*a*c;
  if (discriminant === 0) {
    arr.push(-b/(2*a));
  }
  else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2*a));
    arr.push((-b - Math.sqrt(discriminant)) / (2*a));
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) { 
  let interestRate = ((percent / 100) / 12);
  let loanBody = (amount - contribution);
  let numberOfMonths = countMonths;
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate)**numberOfMonths) - 1)));
  let totalAmount = parseFloat ((monthlyPayment * numberOfMonths).toFixed(2)); 
  return totalAmount  
}

  
  

