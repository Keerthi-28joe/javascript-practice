// *Average of Scores*
//  Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
function marks(a){
let b=0;

for(i=0;i<a.length;i++){

b=b+a[i];
}
avr=b/a.length;
console.log(avr+"%")
 }
 marks([68,87,69,64,80]);