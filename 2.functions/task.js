
function getArrayParams(...arr) {  
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if(arr[i] < min) {
      min = arr[i];
    }     
    if(arr[i] > max) {
      max = arr[i];
    }      
    sum += arr[i];    
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };  
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0; 
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum; 
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {    
    return 0;
  }
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
   if(arr[i] < min) {
      min = arr[i]; 
   }  
    if(arr[i] > max) {
      max = arr[i];
    }      
  }
  return max - min;  
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {    
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0; 
  for (let i = 0; i < arr.length; i += 1) {
    if((arr[i] % 2) === 0)
      sumEvenElement += arr[i];
    else
      sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {    
    return 0;
  }
  let sumEvenElement = 0;  
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if((arr[i] % 2) == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;    
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}

