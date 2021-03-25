let sum = 0;
//const number = prompt('Enter a three-digit positive integer: ');
var number=153

let temp = number;
while (temp > 0) {
   
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an 3 digit number`);
}
else {
    console.log(`${number} is not an 3 digit number.`);
}