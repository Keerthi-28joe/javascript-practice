// Print the sum for first N multiples of 5, if n = 3 then print 5 + 10 + 15 = 30
function multiples(n){
   let sum=0;
    for(i=1;i<=n;i++){
        let to=i*5;
        sum=sum+to;
        
    }
    console.log(sum);
}
multiples(3);

