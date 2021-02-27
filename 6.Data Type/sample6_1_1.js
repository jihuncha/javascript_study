// 2, 8 16 진수
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary); //65
console.log(octal);  //65
console.log(hex);    //65
console.log(binary === octal) //true
console.log(hex === octal) // true


// 정수와 실수
console.log(1 === 1.0); // true