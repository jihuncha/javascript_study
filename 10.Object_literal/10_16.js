var person = {
    name : "Lee"
};

person.name = "Kim";
person.age = 12;

console.log(person.name); //Kim
console.log(person.age); //12

delete person.age;
delete person.address;

console.log(person); // { name: 'Kim' }