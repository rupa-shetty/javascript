function pos(x,y)
{
    if ((x<0 && y>0) || (x>0 && y<0))
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(pos(1,2));
console.log(pos(0,3));
console.log(pos(-8,2));
console.log(pos(-2,-2));