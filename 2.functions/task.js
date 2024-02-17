
function getArrayParams(...arr) {
  if (arr.length == 0) {
    console.log (0)
    return
  }
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if(arr[i] < min)
        min = arr[i];     
      if(arr[i] > max)
        max = arr[i];      
      sum += arr[i];    
    }
    avg = +(sum / arr.length).toFixed(2)
  return { min: min, max: max, avg: avg };  
}


function summElementsWorker(...arr) {
  if (arr.length == 0) {
    console.log (0)
    return
  }
  let min, max, sum;
  min = Infinity;
  max = -Infinity;
  sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
  return { sum };
}


function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    console.log (0)
    return
  }
  let min, max, diffMaxMin;
  min = Infinity;
  max = -Infinity;
  diffMaxMin = 0;    
    for (let i = 0; i < arr.length; i += 1) {
      if(arr[i] < min)
        min = arr[i]; 
      
      if(arr[i] > max)
        max = arr[i];
    }
    diffMaxMin = max - min;
  return { diffMaxMin };  
}


function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    console.log (0)
    return
  }
  let sumEvenElement, sumOddElement, diffSumEvenOddElement;
  sumEvenElement = 0;
  sumOddElement = 0;
  diffSumEvenOddElement = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if((arr[i] % 2) == 0)
        sumEvenElement += arr[i];
      else
        sumOddElement += arr[i];
    }
    diffSumEvenOddElement = Math.abs(sumEvenElement - sumOddElement);    
  return { diffSumEvenOddElement };
}


function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    console.log (0)
    return
  }
  let sumEvenElement, countEvenElement, averageEvenElement;
  sumEvenElement = 0;  
  countEvenElement = 0;
  averageEvenElement = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if((arr[i] % 2) == 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;}    
      }      
    averageEvenElement = (sumEvenElement / countEvenElement);  
  return { averageEvenElement };
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult;
  maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i += 1) {

  }


}
