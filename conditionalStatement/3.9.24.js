function isLeapYear(a){
    if(a%4==0 && a%400==0){
        console.log("Y");
    }
    else if(a%100==0){
        console.log("N");
    }
    else{
        console.log("Y");
    }
}