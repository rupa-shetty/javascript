//const num1 = parseFloat(prompt ("Enter 1st number: "));
//const num2 = parseFloat(prompt ("Enter 1st number: "));
var num1=10;
var num2=20;
var num3=5;
var least;

if( num1<=num2 && num1<=num3)
{
    least =num1;
}
else if(num2<=num1 && num2<=num3)
{
    least= num2;
}
else
{
    least= num3;
}

console.log("The least number is: "+least);