var person = {
    'last-name' : 'Lee',
    1:10,
    'name' : 'test'
    // name : "testset"
}

var name = "test22"

//console.log(person.'last-name'); //SyntaxError: Unexpected string
// console.log(person.last-name); //ReferenceError: name is not defined
// console.log(person[last-name]); //ReferenceError: last is not defined
// console.log(person['last-name']);

// console.log(person.'1'); //SyntaxError: Unexpected string
// console.log(person.1);  //SyntaxError: Unexpected number(?)
// console.log(person[1]); //10 person[1] -> person['1']
// console.log(person['1']); //10

//식별자로 인식됨.
console.log(person.last-name); //NaN ???


