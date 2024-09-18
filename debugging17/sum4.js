// Write a program to generate the first 'n=5' terms of the following series 
// 1 4 9 16 25. Debug the program below

function generateSeries(n) {
    let str = "";
    for (let i = 1; i <=n; i++) {
        let term = i ** 2; 
        str = str+" "+term;
    }
    return str;
}

// Example usage
let n = 5;
let result = generateSeries(n);
console.log(`The first ${n} terms of the series are: ${result}`);
