let a1=5;
let a2=20;
console.log(a1,"\n",a2)

let add=a1+a2;
console.log(`Add:${add}`)

let subt=a2-a1;
console.log(`Subtract:${subt}`);

let mul=a1*a2;
console.log(`Multiply:${mul}`);

let div=a2/a1;
console.log(`Divide:${div}`);

let rem=a2%a1;
console.log(`Remainder:${rem}`);

console.log(`a1 after += : ${a1+=100}`)
console.log(`a1 after -= : ${a1-=25}`)

console.log("is 20 greater than 10:", 20>10);
console.log("is 20 less than 10:", 20<10);

console.log("is 23 greater than equal to 20:", 23>=20);
console.log("is 12 less than equal equal 12:", 12<=12);

console.log(`a1:${a1}, type:${typeof a1}`)
let a3="80";
console.log(`a3:${a3}, type:${typeof a3}`);

console.log(`output of a1==a3:${a1==a3}`)
console.log(`output of a1===a3:${a1===a3}`)


let x=0, y=1; z=1; // 0-> false 1-> true 
console.log(x&&y); // and
console.log(y&&z);

console.log(x||y); // or

console.log(x);
console.log(!x) // not
