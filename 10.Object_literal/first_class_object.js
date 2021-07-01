function add(num1) {
    return function (num2) {
        return num1 + num2;
        }
    };

console.log(add(3)(4));