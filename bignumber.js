function bignumber()
{
    var num1=10;
    var num2=13;
    var num3=6;
//   10>13=f    && 10>6=t
    if((num1>num2) && (num1>num3))
    {
     alert("num1 is big")
    }
    //13>6=t           && 13>10=t
    else if((num2>num3) &&(num2>num1))
    {
        alert("num2 is big")
 
    }
    else{
        alert("num3 is big")
    }
}