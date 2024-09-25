// let a = 0;
// let b = 1;
// let n =10;
// console.log(a);
// console.log(b);
// for(i=1;i<=n;i++)
// {

//     let fibonocci=a+b;
//     a=b;
//     b=fibonocci;

// console.log(fibonocci);
// }
let a=0;
let b=1;
console.log(a);
console.log(b);
while(a<=10){
    let f=a+b;
    a=b;
    b=f;
    console.log(f);
}