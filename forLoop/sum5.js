// sum of odd numbers between 1 and 100
function oddNumbers(n){
    let d=0;
    for(i=1;i<=n;i++){
        if(i%2!=0){
            d=d+i;
        }
    }
    return d;
}
 let result=oddNumbers(100);
 console.log(result);
