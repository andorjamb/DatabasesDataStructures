

let string1, string2;


function cleanString(string1, string2) {
    let newrray = [];
    if (string1.length == string2.length) {
        for (letter in string1) {
            if (string2.includes(letter)) {
                newrray.push(letter);
            }
        }
        if (string2.length == newrray.length) { return true; }
    }
    else return false;
}

console.log(cleanString('cat', 'rat'));
console.log(cleanString('catch', 'rat'));
console.log(cleanString('cat', 'atc'));