function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

//console.log(logAtLeast5(10));
console.log(logAtLeast5(1));
console.log(logAtLeast5(0));

//O(n+5)
//O(n);
