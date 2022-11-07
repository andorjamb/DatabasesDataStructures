//Write  a  function  called  power  which  accepts  a  base  and  an  exponent.
//The  function should return the power of the base to the exponent.
//This function should mimic the functionality of
//Math.pow() – do not worry about negative bases and exponents.


function power(base, exponent) {
    if (exponent == 0) return 1;
    return base * power(base, exponent - 1);
}

//iteratively:
function power2(base, exponent) {
    newBase = base;
    while (!(exponent === 0)) {
        exponent--;
        return newBase = newBase * base;
    }
    if (exponent === 0) { return 1 }

}

//testing
console.log(power(2, 0));
console.log(power(2, 2));

console.log(power2(2, 0));
console.log(power2(2, 2));
