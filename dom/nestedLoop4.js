// Print the below pattern of numbers, if n = 3
//   1
// 2 2
// 3 3 3

function printNum(n){
    for(let i=1;i<=n;i++){
        a=" ";
        for(let j=1;i<=n;j++){
            a+=i;
        }
    }
    console.log(a);
}
printNum(3);