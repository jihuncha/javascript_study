var person = {
    name:"Lee",
    sayHello:function(){
        console.log(`hello! my name is ${this.name}.`);
    }
};

console.log(typeof person);
console.log(person);

