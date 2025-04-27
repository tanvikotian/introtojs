//a.
console.log("Hello, World!");


// b.
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

const math = { add, multiply };

const sum = math.add(10, 5);
const product = math.multiply(10, 5);

console.log("Addition:", sum);
console.log("Multiplication:", product);
