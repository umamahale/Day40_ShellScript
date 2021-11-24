const prompt = require("prompt-sync")();
const TEMPERATURE = prompt("Enter temperature with in range: ")
let check = parseInt(prompt("Enter 1. celcius to farenheit \n 2. farenheit to celcius "));
switch (check) {
case 1:
    if (TEMPERATURE >= 0 && TEMPERATURE <= 100) 
        celToFar(TEMPERATURE);
    else 
        console.log("Enter temperature within range");
    break;
case 2:
    if (TEMPERATURE >= 32 && TEMPERATURE <= 212) 
        fahrToCel(TEMPERATURE);
    else 
        console.log("Enter temperature within range");
    break;
default:
    console.log("invalid check number");
}

function celToFar(temperature) {
    degF = (9 / 5) * temperature + 32;
    console.log(temperature+" celcius to farenheit is: " + degF+ " F");
}

function fahrToCel(temperature) {
    degC = (temperature - 32) * (5 / 9);
    console.log(temperature+" farenheit to celcius is: " + degC + " C");
} 