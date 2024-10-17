// 5. Complete the program printAllMultiplesOf5Bet(a, b)
// eg, printAllMultiplesOf5Bet(10, 30) in reverse
// 30
// 25
// 20
// 15
// 10

function fiveMulti(a,b){
    for(i=b;i>=a;i--){
if(i%5==0){
    console.log(i);
}
    }
}
fiveMulti(10,30);