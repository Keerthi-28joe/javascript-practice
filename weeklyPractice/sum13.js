// *Percentage Increase in Prices*
//    Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.

let old=[40,20,60,90];
function profit(a){
  let newPrice=[50,30,80,100];
    for(i=0;i<old.length;i++){
        console.log(newPrice[i]-old[i]);
    }
}
profit();