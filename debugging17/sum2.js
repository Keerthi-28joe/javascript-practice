// A program that takes a student's score (0-100) 
// and prints the corresponding grade:
// A for 90-100
// B for 80-89
// C for 70-79
// D for 60-69
// F for 0-59
let score=95;
function studentScores(score)
{
    if(score>=90){
        console.log("Grade A");
    }
    else if(score>=80){
        console.log("Grade B");
    }
    else if(score>=70){
        console.log("Grade C");
    }
    else if(score>=60){
        console.log("Grade D");
    }
    else{
        console.log("Grade F");
    }
}
studentScores(score);
