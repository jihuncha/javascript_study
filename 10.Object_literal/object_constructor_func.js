var person = new Object();
console.log(person.name) //undefined
console.log(person.email)
console.log(person.birth)

person.name = "test";
person.email = "test@example.com";
person.birth = "1207";
console.log(person.name)
console.log(person.email)
console.log(person.birth)