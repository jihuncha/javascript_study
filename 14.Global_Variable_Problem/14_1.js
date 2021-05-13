function foo() {
    var x = 'local';
    console.log(x); //local
    return x;
}

foo();
console.log(x);     //referenceError: x is not defined


