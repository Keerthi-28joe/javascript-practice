// Print the sum of all even numbers between a and b. if a = 5, and b = 10 then it should print 24.
// Hint: Between 5 and 10 there is 6, 8 and 10 and their sum is 24


function addingNum(add) {
    let a=5;
    let b=10;
    let sum=0;
    for(a; a <=b; a++) {
if(a%2==0){
    // console.log(a);
    sum=sum+a;
}
}
console.log(sum);
}
addingNum()