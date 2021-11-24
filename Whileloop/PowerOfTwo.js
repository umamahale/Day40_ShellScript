//take input from user
const prompt = require("prompt-sync")();
const NUM = prompt("Enter number: ");

let i = 0;
while (i <= NUM) {
    let power = Math.pow(2, i);
    if(i == 0) {
        console.log("power of 2^" + i + "=" + 1);  
    }
    if (power <= 256) {
        console.log("power of 2^" + i + "=" +power);
        i++;
    }
    else {
        break;
    }
}