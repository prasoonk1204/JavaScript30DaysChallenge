// task 1
const oddeven = function (n) {
  if (n%2==0) {
    console.log("Even")
  } else {
    console.log("Odd")
  }
}

oddeven(8)


// task 2
function square(n) {
  return n*n
}

const sq = square(3)
console.log(sq)


// task 3
function bignum(a,b) {
  if (a>b) {
    console.log(`${a} is bigger`)
  } else {
    console.log(`${b} is bigger`)
  }
}

bignum(10,24)


// task 4
function strCan(a1,a2) {
  return a1 + a2
}

str1= "hello"
str2= " world!"
const str = strCan(str1, str2)
console.log(str)


// task 5
const add = (n1,n2) => { return n1+n2}

console.log(add(2,7))


// task 6
const findAlpha = (str) => {
  for (let i=0; i< str.length; i++) {
    if (str[i]=="a") {
      return "true";
    }
  }  return "false"
}

s="Organisation"
console.log(findAlpha(s))


// task 7
const prod = (n1, n2=10) => {
  return n1*n2
}

console.log(prod(2, 6))


// task 8
function greet(name, age="x") {
  console.log(`Hello ${name}, You are ${age} years old!`)
}

let name="Prasoon";
let age=19;
greet(name, age)


// task 9
const multifun = (func, num) => {
  for (let index=1; index<=num; index++) {
    func("pk", 12)
  }
}

multifun(greet, 4)


// task 10
const f1 = (a1= 10) => {
  return a1*a1
}
const f2 = (a2) => {
  return a2/2
}

const f3 = (f1,f2,num) => {
  const res = f1(num);
  console.log(f2(res))
}

f3(f1,f2,10)
