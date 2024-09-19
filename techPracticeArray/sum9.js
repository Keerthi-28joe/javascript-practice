// Filter Odd Numbers  
// Create an array of 10 numbers. Write a program to filter
// out only the odd numbers and print them.

let numbers=[1,2,5,7,9,10,19,25];
let odd=numbers.filter(function(num){
    return num%2!==0;
});
console.log(odd);



