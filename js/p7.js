const num1 = parseFloat(prompt("Enter 1st number: "));
const num2 = parseFloat(prompt("Enter 1st number: "));
let greatest;

if( num1>=num2)
{
    greatest =num1;
}
else 
{
    greatest= num2;
}

console.log("The greatest number is: "+greatest);