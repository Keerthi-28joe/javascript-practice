// 1.Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.
function sumNumbers(n) {
    let total = 0;
    let i = 1;
    while (i <= n) {
        total += i;
        i++
    }
    return total;
}
console.log(sumNumbers(5));
// 
//2. Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.
function calculateFactorial(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}
console.log(calculateFactorial(5));
// 
// 3.Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.
function printEvenNumbers(n) {
    let i = 1;
    while (i <= n) {
        if (i % 2 == 0) {
            console.log(i);
        }
        i++;
    }
}
// 
printEvenNumbers(10);
// 4.Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.
function sumNumbers(n) {
    let sum = 0;
    let i = 1;
    while (i <=n) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumNumbers(9));
// 

//  find odd numbers
function printOddNumbers(n){
    let i=1;
    while(i<=n){
        if (i % 2!==0){
          console.log(i);
        }
        i++
    }
}
printOddNumbers(10);
// multiple of 3
function multipleOf(n1){
    let sum=0;
    let i=1;
while(i<=n1){
    sum+=i;
    i+=3;
}
return sum;
}
console.log(multipleOf(12));