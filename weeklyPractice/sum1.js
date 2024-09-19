// Given a number of 7 digits, print the sum of the digits of the number.
// let number=1234567;

// let num=1234567;
// let sum=0;
// while(num>0){
//     number=num%10;
//     sum=sum+number;
//     num=Math.floor(num/10);
// }
// console.log(sum);

let num=1234567;
let sum=1;
while(num>0){
    number=num%10;
    let a=number*5;
    console.log(a);
    num=Math.floor(num/10);
}
