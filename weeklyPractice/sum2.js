// Add the above code in a function digitSum(num) . It should return the sum of the digits of the number.
function digitSum(num){
    let sum=0;
    while(num>0){
        number=num%10;
        sum=sum+number;
        num=Math.floor(num/10);
    }
    console.log(sum);
}
digitSum(1234567)