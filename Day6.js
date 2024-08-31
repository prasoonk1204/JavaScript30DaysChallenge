// task 1
let arr1 = [1,2,3,4,5];
console.log(arr1);


// task 2
console.log(arr1[0]);
console.log(arr1[arr1.length-1]);


// task 3
arr1.push(6,7);
console.log(arr1);


// task 4
arr1.pop();
console.log(arr1);


// task 5
arr1.shift(arr1[0]);
console.log(arr1);


// task 6
arr1.unshift(10);
console.log(arr1);


console.log("Original array:",arr1);

// task 7
let arr2 = arr1.map((n) => n*2);
console.log("Doubled array:",arr2);


// task 8
let arr3= arr1.filter((n) => n%2==0 );
console.log("Even array:",arr3);


// task 9
let arr4= arr1.reduce(function sumNum(n1,n2) {
  return (n1+n2);
})
console.log("Sum of all numbers of arr1:",arr4);


// task 10
let newArr = [10,20,30,40,50];
for (let i=0; i<newArr.length; i++) {
  console.log(newArr[i]);
}


// task 11
console.log("forEach method");
newArr.forEach(function (num) {
  console.log(num);
})


// task 12
let newArr2= [[1,10,100],[2,20,200],[3,30,300]];
console.log(newArr2);


// task 13
console.log(newArr2[2][0]);
