// *Simple Interest Calculation*
//    Create an array that holds the principal, rate of interest, and time in years for a loan.
//     Write a program to calculate the simple interest using the formula SI = (P * R * T) / 100 
//    and print the result.

function simple(num) {
  let mul = 1;
  for (i = 0; i < num.length; i++) {
    mul = mul * num[i];

  }
  div = mul / 100;
  console.log(div);
}
simple([2000, 6, 2]);