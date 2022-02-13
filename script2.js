// Fix the code to get the largest of three.
// Code:
// var aa = (f, s, t) => {
//   if (f > s && f > t) {
//     console.log(f);
//   } else if (s > f && s > t) {
//     console.log(s);
//   } else {
//     console.log(t);
//   }
// };
// aa(1, 2, 3);
// — — — — — — — — — — — — — — — — — — — — — — — — —
// Fix the code to Sum of all numbers using IIFE function
// Code:
// const arr = [9, 8, 5, 6, 4, 3, 2, 1];
// (function () {
//   let sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
//   return sum;
// })();
// -------------------------------------------------
// Fix the code to gen Title caps.
// Code:
// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function (arro) {
//   for (var i = 0; i <= arro.length; i++) {
//     console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//   }
// };
// ano(arr);
// ----------------------------------------------------
// Fix the code to return the Prime numbers
// Code:
// const newArray = [1, 3, 2, 5, 10];
// const myPrime = newArray.filter((num) => {
//   for (let i = 2; i <= num; i++) {
//     if (num % i !== 1) {
//       return false;
//     }
//   }
//   return num;
// });
// console.log(myPrime);
// ------------------------------------------------------
// Fix the code to sum the number in that array
// Code:
// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const sum = (a, b) => a + b;
// const sum1 = num.reduce(sum);
// console.log(sum1);
// — — — — — — — — — — — — — —
// Fix the code to gen Title caps.
// Code:
// var arr = ["guvi", "geek", "zen", "fullstack"];
// var w = [];
// (function () {
//   for (var i = 0; i <= arr.length; i++) {
//     var a = arr[0][i].toUpperCase() + arr[i].substr(1);
//     w.push(a);
//     console.log(w.join(" "));
//   }
// })();
// — — — — ' — — — — — — — — — — — — — — — — — — — —
// Fix the code to give the below output:
// Sum of odd numbers in an array
// Code:

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var w = [];
as.forEach((element) => {
  if (element % 2 == 0) {
    w.push(element);
  }
});
var r = w.reduce((a, b) => a + b);
console.log(r);

// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);
