//  *Finding Maximum Score*
//    You have an array of test scores for 7 students.
//  Write a program to find and print the highest score using the Math.max()
//   function along with the spread operator.

function std(a){
    let c=a.Math.max(...a);
    console.log(c);
}
std([60,34,23,12,43,94,90]);