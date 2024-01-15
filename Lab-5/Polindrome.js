
function polindrome(n){
   var rev=0;
   var temp = n;
    while(temp>0){
        n1 = temp%10;
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

module.exports = polindrome;