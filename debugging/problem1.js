1.// 
function greet(){
    console.log("Hello World");
}
greet();

// 2
function getRandomNumber() {
    return Math.random();
}
let randomNum = getRandomNumber();
console.log(randomNum);

// 3
function displayGreeting(name){
    console.log(`hello ${name}!`);
}
displayGreeting(`keerthika`);
displayGreeting(`rechel`);
displayGreeting(`ravikumar`);
displayGreeting(`joel`);
//
let num1=9;
function calculateSquare(num1){
let c=num1*num1;
return(c);
}
let result=calculateSquare(num1);
console.log(result);

// 5
let var1="keerthi";
let var2="ka";
function concatStrings(var1,var2){
    let d=var1+var2;
    return(d);
}
let result1=concatStrings(var1,var2);
console.log(result1);

// 6
function isAdult(age){
    if(age>=18){
        return("true");
    }
    else{
        return("false");
    }
}
console.log(isAdult(20));
// 7

let a=20;
let b=30;
function addNumbers(a,b){
let c=a+b;
return(c);
}
let result3=addNumbers(a,b);
console.log(result3);

//8

function isEven(num){
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}
isEven(40);
// 9

function compareNumbers(number1,number2){
    if(number1==number2){
        console.log("The numbers are equal");
    }
    else if(number1>number2){
        console.log("The first number is greater");
    }
    else{
        console.log("The second number is greater");
    }
}
let result4=compareNumbers(30,40);
console.log("result4");
