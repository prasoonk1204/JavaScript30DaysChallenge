// 26.09.24

var num1=10;
console.log(`${num1}, Datatype: ${typeof num1}`);

let str1="Hello World!";
console.log(`${str1}, Datatype: ${typeof str1}`);

const a=true;
console.log(`${a}, Datatype: ${typeof a}`);

const list1=['hi', 'hello', 'namaste'];
console.log(list1);
console.log(`Datatype: ${typeof list1}`);

const obj1={
  name : "Raj",
  age : 22,
  place : "India",
};
console.log(obj1);
console.log(`Datatype: ${typeof obj1}`);

let var1=20;
console.log("Initial value :",var1);
var1="blah"
console.log("Reassigned value :",var1);

const var2=false;
console.log("Initial value :",var2);
var2=400;
console.log("Reassigned value :",var2) //error as const cannot be changed once assigned 
