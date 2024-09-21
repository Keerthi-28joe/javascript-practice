// Compare Lengths of Two Strings Using length
// Write a program to compare the lengths of two strings and print which one is longer using the length property.
// Example:
// Input: "JavaScript", "Python"
// Output: "JavaScript" is longer than "Python".
 

function result(a1,b1){
    if(a1.length>b1.length){
        console.log(a1+" is longer than "+b1);
    }
    else{
        console.log("not same");
    }
}
let a1="JavaScript";
let b1="Python"
result(a1,b1);