// swap example1
let a = 5;
let b = 3;
console.log(a, b);
let c = a;
a = b;
b = c;
console.log(a, b);
//  
// example 2
let x = 10;
let y = 20;
console.log(x, y);
let z = x;
x = y;
y = z;
console.log(x, y);
// 
// using XOR
let j = 30;
let k = 40;
console.log(j, k);
j = j ^ k;
k = j ^ k;
j = j ^ k;
console.log(j, k);
// 
// destructuring 
let a1 = 50;
let b1 = 10;
[a1, b1] = [b1, a1];



