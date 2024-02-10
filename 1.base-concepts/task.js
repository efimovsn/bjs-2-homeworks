"use strict"  
function solveEquation(a, b, c) {  
  let arr = [];
  let dis = b**2-4*a*c;
  let x = -b/(2*a);
  let x1 = (-b + Math.sqrt(dis)) / (2*a);
  let x2 = (-b - Math.sqrt(dis)) / (2*a); 
  if (dis < 0) {    
    console.log ("Дискриминант равен: " + dis + ", меньше нуля. Корней нет.")
  } else if (dis === 0) {
    arr.push(x);
    console.log ("Дискриминант равен нулю. Один корень: " + x)
  }  else {
    arr.push(x1);
    arr.push(x2);
    console.log ("Дискриминант: " + dis)
  }  
  console.log(arr);
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) { 
  let P = ((percent / 100) / 12);
  let S = (amount - contribution);
  let n = countMonths;
  let Платёж = S * (P + (P / (((1 + P)**n) - 1)));
  let totalAmount = parseFloat ((Платёж * 12).toFixed(2)); 
  console.log(totalAmount);  
  return totalAmount  
}

  
  

