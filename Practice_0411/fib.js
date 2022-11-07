//Write a recursive function called fib which accepts a number and returns
//the nth number in the Fibonacci sequence.
//Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
//which starts 1 and 1, and where every number ther after is equal to the sum of the previous two numbers
//https://en.wikipedia.org/wiki/Fibonacci_number

function fib(n) {
    if (n === 0) {
        ans = 0;
        return ans;
    }
    else if (n < 3) {
        ans = 1;
        return ans;
    }
    else {
        ans = fib(n - 1) + fib(n - 2);
        return ans;
    }
}

//testing
console.log(fib(0));
console.log(fib(1));
console.log(fib(4));
console.log(fib(10));
fib(1);
fib(4) // 3
fib(10) // 55

