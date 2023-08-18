// custom hof that return another function
function multipyBy (n) {
    return function (x) {
        return x * n;
    };
}

const double = multipyBy(2);
console.log (double(5));

// custom hof that implement callback 
function reapet (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function logNumber (n) {
    console.log(`the number is ${n}`);
}

reapet(3, logNumber);
