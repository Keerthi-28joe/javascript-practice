// You have two variables: time and place. Concatenate them into a sentence like: "The meeting is at [time] in [place]." For example, if time = "3 PM" and place = "the conference room", the result should be: "The meeting is at 3 PM in the conference room.".
let time=" 3 PM ";
let place=" the conference room";
console.log(" The meeting is at "+time+ " in the conference room. ");

// 
let var1=" 3 PM ";
let var2="in the conference room "
function concat(var1,var2){
    let d=var1+var2;
    return(d);
}
let result=concat(var1,var2);
console.log(" The meeting is at "+var1+ var2);