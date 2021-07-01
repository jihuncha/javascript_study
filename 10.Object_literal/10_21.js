//es5
// var prefix = 'prop';
// var i = 0;

// var obj = {};

// obj[prefix + '-' + ++i] = i;
// obj[prefix + '-' + ++i] = i;
// obj[prefix + '-' + ++i] = i;

// console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }


//es6
const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i

};

console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }
