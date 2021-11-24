//take input from user
const prompt = require("prompt-sync")();
const NUM = prompt("Enter number: ");
//function call
checkPalindrome(NUM);
checkPrime(NUM);

// check palindrome 
function isPalindrome(num) {
    let temp = num;
    let reverse = 0;
    let result = 0;

    while (num > 0) {
        result = (num % 10);
        reverse = (reverse * 10) + result;
        num = parseInt(num / 10);
    }

    if (temp == reverse)
        console.log("Number is a palindrome");
    else
        console.log("Number is not a palindrome");
}

//check prime
function isPrime(num) {
    if((num == 0) || (num == 1)) {
        console.log(num+" :Number is not a prime number");
    }
    else {
    for(let i = 2; i <= num/2; i++) {
        if(num % i == 0) {
            console.log(n+" :Number is not a prime number");
            flag = 1;
            break;
        }
      }
    }
    if(flag == 0) {
        console.log(n+" :Number is a prime number");
    }
} 