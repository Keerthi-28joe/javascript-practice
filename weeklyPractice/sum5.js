// Given a year in the variable exampleYear, write a program to check whether it is a leap year or not.
// Print "Y" if it's a leap year and "N" if it's a common year.
// Sample Input :
// 2020
// Sample Output :
// Y

function leapYear(year){
if(year%4===0 || year%400===0){
    console.log("Y");
}
else if(year%100===0){
    console.log("N");
}
else{
    console.log("N");
}
}
leapYear(2020);
