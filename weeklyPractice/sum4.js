// Given a string "Freshworks, Global Infocity, Perungudi, Chennai - 600096", print the address on 4 different lines.
//   Expected Output:
// Freshworks
// Global Infocity
// Perungudi

function sentance(name) {
    let a = name.split(',');
    for (i = 0; i < a.length; i++) {
        console.log(a[i].trim())
    }
}
sentance("Freshworks, Global Infocity, Perungudi, Chennai - 600096")