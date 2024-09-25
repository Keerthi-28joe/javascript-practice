// Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6

function printMultiplicationTable(r){
    for(i=1;i<=r;r--){
        let n=5;
        let d=n*r;
        console.log(n+"*"+i+"="+d);
    }
}
printMultiplicationTable(6);