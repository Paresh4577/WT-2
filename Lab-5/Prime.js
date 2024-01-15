
function prime(n){
    let flag = false;
    for(i=2;i<n;i++){
       if(n%i==0){
        flag=true;
        break;
       }
       
    }
    if(flag){
        console.log("The no is Not Prime:");
    }
    else{
        console.log("The no is Prime:");
    }
    
}

module.exports = prime;