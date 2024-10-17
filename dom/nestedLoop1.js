function printStr(n){
    for(i=1;i<=n;i++){
        let star="";
        for(j=1;j<=i;j++){
            star=star+"*";
        }
        console.log(star);
    }
}
printStr(3);

