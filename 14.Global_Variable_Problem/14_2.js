var x = 'global';

function foo() {
    console.log(x);         //넌 뭐가 나오니??
    var x = 'local';
}

foo();
console.log(x);             //global