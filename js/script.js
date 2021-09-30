"use strict";
let a = 5;
let b = 6.25;
b = 0.25;
console.log(a+b);
console.log(a-b);
b = '0.25';
console.log(a+b);
console.log(a+(+b));
console.log(a-b);
b = true;
console.log(a+b);
console.log(a-b);
const obj = {
  name: "Serega",
  age: 22,
  IsWorking: true
};
console.log(obj.name, "465", obj.age, obj.IsWorking);
let arr = ["first", "second", "third"];
alert("Ха лох");
let result = confirm("Ты там живой?");
const array = [];
array[0] = prompt("Login");
array[1] = prompt("Password");
console.log(array);
let categoty = "toys";
console.log(`https://62.33.115.18:8080/${categoty}/25`);

let incr = 10;
let decr = 10;
incr++;
decr++;
console.log(10 != '10');
console.log(10 !== '10');