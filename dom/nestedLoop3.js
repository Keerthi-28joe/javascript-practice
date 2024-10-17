// Print the below pattern of ‘*’, if n = 3
// ***
// ***
// ***

function Public(n){
    for(i=1;i<=n;i++){
        a=" ";
        for(j=1;j<=n;j++){
            a+="*";
        }
        console.log(a);
    }
}
Public(3);