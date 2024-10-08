function printNumber(n){
    for(let i=0;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
printNumber(100);

function isPrime(n){
    if(n<=1)return "not prime";
    if(n==2)return "prime";
    for(let i=2;i<=Math.sqrt(n);i++){
       if(n%i==0){
        return "false"
       }
    }
    return "true";
}
console.log(isPrime(9));

function lcm(n1,n2){
    let a=n1*n2;
    for(i=1;i<=a;i++){
        if(i%n1==0 && i%n2==0){
            return i;
        }
        }
}
console.log(lcm(24,42));

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
const num1 = 48;
const num2 = 18;
console.log(`The GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`);
