function factorial(n){
    var fact = 1;
    for(i=1;i<=n;i++){
        fact = fact*i;
    }
    console.log(fact);

     
 }
 
 module.exports = factorial;