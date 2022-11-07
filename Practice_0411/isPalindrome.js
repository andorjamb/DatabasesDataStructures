//Write a recursive func,on called isPalindrome which returns true if the string passed
//to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.


iterative:
function isPalindrome(str) {
    str = str.toLowerCase();
    for (let n = 0; n = Math.floor(str.length / 2); n++) {
        if (str[n] == str[]) {
            return true;
        }
        else {
            return false;
        }
    }
}


//testing: 
console.log(isPalindrome("tibault"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Nilklin"));