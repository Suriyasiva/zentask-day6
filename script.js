// Write a code to print the numbers in the array
// Output: 1234567891011
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var a = [];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string = numsArr[i];
//   a.push(new_string);
// }
// console.log(a.join(""));
// --------------------------------------------------
// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var a = [];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string = numsArr[i];
//   a.push(new_string);
// }
// console.log(a.join());
// ---------------------------------------------------------------
// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
// for (var i = 11; i > 0; i--) {
//   console.log(i);
// }
// -------------------------------------------
// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var a = [];
// for (var i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] % 2 !== 0) {
//     a.push(numsArr[i] + `"even"`);
//   }
// }
// console.log(a);
// -------------------------------------------------
// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var a = [];
// for (var i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] % 2 == 0) {
//     a.push(numsArr[i] + `"even"`);
//   }
// }
// console.log(a);
// --------------------------------------------------
// Write a code to add all the numbers in the array
// Output: 66
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < numsArr.length; i++) {
//   sum = sum + numsArr[i];
// }
// console.log(sum);
// -------------------------------------------------------------
// Write a code to add the even numbers only
// Output: 30
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum = sum + numsArr[i];
//   }
// }
// console.log(sum);
// ------------------------------------------------------------------
// Write a code to add the even numbers and subract the odd numbers
// Output: 94
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i <= numsArr.length; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum = sum + numsArr[i];
//   }
// }
// console.log(sum);
// var numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum1 = 0;
// for (var i = 0; i < numsArr1.length; i++) {
//   if (numsArr1[i] % 2 !== 0) {
//     sum1 = sum1 - numsArr[i];
//   }
// }
// console.log(sum1);
// ---------------------------------------------------------------------
// Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]
// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var a = [...numsArr[0]];
// var b = [...numsArr[1]];
// console.log("Array(" + numsArr[0].length + ")[" + a + "]");
// console.log("Array(" + numsArr[1].length + ")[" + b + "]");
// -----------------------------------------------------------------------
// Write a code to print elements in the inner arrays
// Output: 1234567891011
// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// console.log(numsArr.flat().join(""));
// ------------------------------------------------------------------------
// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//       if(numsArr[i] %2 == 0 )
//       {
//          numsArr[i] = even
//        }
// }
// console.log(numsArr);
// ------------------------------------------------------------------------------
// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var a = numsArr.flat();
// console.log(a.reverse());
// ---------------------------------------------------------------------------------
