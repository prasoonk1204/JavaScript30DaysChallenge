// task 1
const num=-187;

if (num>0) {
  console.log("Number is positive");
} 
else if (num==0) {
  console.log("Number is zero");
} 
else {
  console.log("Number is negative");
}

// task 2
const age=19;

if (age>=18) {
  console.log("Eligible to vote")
} 
else{
  console.log("Not eligible to vote")
}

// task 3
let num1=72, num2=92, num3=28;

if (num1>=num2){
  if (num1>=num3) {
    console.log("num1 is largest")
  }
  else {
    console.log("num3 is largest")
  }
}
else {
  if (num2>=num3) {
    console.log("num2 is largest")
  }
  else{
    console.log("num3 is largest")
  }
}

// task 4
const day=6;
switch (day) {
    case 1: 
      console.log("Monday");
      break
    case 2:
      console.log("Tuesday");
      break
    case 3:
      console.log("Wednesday");
      break
    case 4:
      console.log("Thursday");
      break
    case 5:
      console.log("Friday");
      break 
    case 6:
      console.log("Saturday");
      break
    case 7:
      console.log("Sunday");
}

// task 5
const marks=93;

switch (true) {
    case marks<40: 
      console.log("F");
      break
    case marks<60:
      console.log("D");
      break
    case marks<75:
      console.log("C");
      break
    case marks<90:
      console.log("B");
      break
    case marks>=90:
      console.log("A");
}

// task 6
const n=21;
const oddeven = n%2==0 ? "Even" : "Odd";

console.log(oddeven)

// task 7
const year=2004

if ((year%4==0 && year%100!=0) || (year%400==0)) {
  console.log("Leap year")
}
else {
  console.log("Not a Leap yaer")
}
