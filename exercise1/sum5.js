// Extract a Portion of a String Using slice()
// Write a program that extracts a portion of a string from the 4th index to the 8th index using slice().
// Example:
// Input: "Hello, World!", Slice from index 4 to 8
// Output: "o, W"
let sentance="Hello World!"
function result(){
    let slice=sentance.slice(4,7);
    console.log(slice);
}
result();