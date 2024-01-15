class Myclass{
    prime(n){
        let flag = false;
        for(let i=2;i<n;i++){
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

    polindrome(n){
        var rev=0;
        var temp = n;
         while(temp>0){
            var n1 = temp%10;
             rev = (rev*10)+n1;
             temp = parseInt(temp/10);
         }
         if(n==rev){
             console.log("The no is Polindrome");
         }
         else{
             console.log("The no is Not Polindrome");
         }
    }

    factorial(n){
    var fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    console.log(fact);
    }

    rangePrime(){
        let flag=0;
        let n1=10;
        let n2=20;
        for(let i=n1;i<n2;i++){
            for(let j=2;j<i;j++){
                if(j%i==0){
                 flag=true;
                 break;
                }
                if(flag==false){
                    console.log("The prime no`s are:"+j);
                }
             }
             
             
        }
    }


}

module.exports = Myclass;