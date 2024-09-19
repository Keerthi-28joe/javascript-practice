// Print the first power of 5 that is greater than 10000.

function square(num){
    let i=1;
    while(num<10000){
        num=num*5;
        i++
    }
    console.log(num);
}
square(5);

// function powerOf5(){
//     //write your code here.
//    let i=1;
//    let n=5;
//    while(n<10000){
//        n=n*5;
//        i++;
//    }
//    console.log(n);
// }
// powerOf5()