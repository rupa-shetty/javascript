var a=10;
var b=20;
var c=05;

if((a>=b) && (a>=c))
{
    if(b>=c)
    {
    console.log("The ascending number is: "+c,+b,+a);
    }
else 
{
    console.log("The ascending number is: "+b,+c,+a);
}
}
else if((b>=a) && (b>=c))
{
    if(a>=c)
    {
        console.log("The ascending number is: "+c,+a,+b);
    }
    else
    {
        console.log("The ascending number is: "+a,+c,+b);
    }
}
else if((c>=a) && (c>=b))
{
    if(a>=b)
    {
        console.log("The ascending number is: "+b,+a,+c);
    }
    else
    {
        console.log("The ascending number is: "+a,+b,+c);
    }
}

