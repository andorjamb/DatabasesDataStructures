function isPalindrome(input) {
    while (input.length > 1) {
        let i = input.shift();
        let j = input.pop();
        if (i === j) {
            isPalindrome(input);
        }
        else {
            return (false);
        }

    } return true;
}


console.log(isPalindrome(['1', '2', '3', '3', '2', '1']));
console.log(isPalindrome(['1', '2', '3', '5', '3', '2', '1']));


console.log(isPalindrome(['a', 'd', 'f', 'd', 'a']));
console.log(isPalindrome(['a', 's', 'd', 'f', 'd', 'g', 'h']));
console.log(isPalindrome(['a', 's', 'd', 'f', 'h', 'd', 'g', 'h']));