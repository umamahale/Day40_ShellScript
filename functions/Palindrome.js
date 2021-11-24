//take input from user
const prompt = require("prompt-sync")();
const NUM = prompt("Enter number: ");
//function call
isPalindrome(NUM);
//check num is palindrome or not
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