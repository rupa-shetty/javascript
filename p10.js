var num =24;

console.log(`The factors of ${num} is:`);

for(var i = 1; i <= num; i++) {

    if(num % i == 0)
     {
        console.log(i);
    }
}