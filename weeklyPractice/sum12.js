// *Boolean Algebra (AND Operation)*
// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.
let array1=[true,false,true];
let array2=[false,true,true];
let result=[];
for(i=0;i<array1.length;i++){
    result.push(array1[i]&&array2[i]);
}
console.log(result);