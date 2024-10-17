// 3.Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
// if n = 4, print the first 4 odd numbers 1 3 5 7

function odd(n){
    for(i=1;i<=n*2;i=i+2){
        console.log(i);
    }
}
odd(4);