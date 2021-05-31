let x = 'global';

function foo() {
    console.log(x);         //넌 뭐가 나오니??
    let x = 'local';
    // console.log(x);
}

foo();
// console.log(x);             //global