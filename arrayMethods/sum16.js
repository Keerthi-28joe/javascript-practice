// Shift Multiple Times
// Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal.

let fruits=["apple","banana","kiwi","orange","watermelon"];
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
for(i=0;i<fruits.length;i++){
    fruits=fruits.shift();
}
console.log(fruits);