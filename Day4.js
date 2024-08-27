// task 1
for (i=1; i<=10; i++){
  console.log(i)
}


// task 2
console.log("Table of 5")
for (i=5; i<=50; i=i+5) {
  console.log(i)
}


// task 3
let n=0, sum=0;
while (n<=10) {
  sum=sum+n;
  n++
}
console.log(`Sum of number from 1 to 10 : ${sum}`)


// task 4
let i1=10;
while (i1>0) {
  console.log(i1);
  i1--
}


// task 5
let num1=1;
do{
  console.log(num1);
  num1++
} while(num1<=5)


// task 6
let num2=5, fac=1;
do{
  fac=num2*fac
  num2--
} while(num2>0)

console.log(`Factorail of 5 is ${fac}`)


// task 7
let l=5
let str=""
for (i=1; i<=l; i++) {
  for (j=1; j<=i; j++) {
    str+=j 
  }
  str+= "\n"
}
console.log(str)


// task 8
for (i=1; i<=10; i++) {
  if (i==5) {
    continue
  }
  console.log(i)
}


// task 9
for (i=1; i<=10; i++) {
  console.log(i)
  if (i==7) {
    break
  }
}
