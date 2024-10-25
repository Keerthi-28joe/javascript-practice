// Find the first occurrence of 13 and stop the code

let arr = [5, 8, 13, 21];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 13) {
    console.log("Found 13!"); 
  } 
  }
//   Find the maximum in an array:

function findMax(arr) {
  let max = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let result=findMax([23,44,5,99,100]);
console.log(result);

// Finding lexically first string. 

function findAlphabeticallyFirst(arr) {
    if(arr.length==0){
        return ""
    }
  let first = arr[0]; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      first = arr[i];
    }
  }
  return first;
}
let result1=findAlphabeticallyFirst(["keerthi","joel","rachel","ravikumar"]);
console.log(result1);

// Debug Binary search code:

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {  
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return -1;  
}
let result2=binarySearch([1,2,3,4,5,6],4);
console.log(result2);