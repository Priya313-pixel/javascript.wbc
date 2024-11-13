//Type A function

// function myFunction(){
//     console.log("today is a beautiful day")
//     console.log("we learn js function")
// }
// myFunction()
// myFunction()
// myFunction()

//Type B function

// function myFunction(msg){
//     console.log(msg)
// }
// myFunction("development")
// myFunction("javascript")

// function myFunction(a,b){
//     console.log(a+b)
// }
// myFunction(2,3)

// create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in that string.(TCS String Question)

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char ==="a" ||
//             char ==="e" ||
//             char ==="i" ||
//             char ==="o" ||
//             char ==="u" 
//         ){
//             count++;
//         }
//     }
//     console.log(count)
// }
// countVowels("apple")//2

// let arr = [1,2,3,4,5,6,7,8,9]

// arr.forEach(function printVal(val){
//     console.log(val)
// })

// let arr1 =["goa", "pune", "thane", "mumbai"]
// arr1.forEach((val) => {
//     console.log(val)
// })

// 1.create a function that reverse an array.

// var arr = [1,2,3,4,5]
// let revArr=[];
// for(let i= arr.length-1; i>=0; i--){
// revArr.push(arr[i]);
// }
// console.log("reverse array: ",revArr) // [5,4,3,2,1]

// 2.create a function that filter out negative numbers.

// let arr1 = [2,-4,6,-3,-6,9,-1,-8,0,5]
// for( let i=0;i<arr1.length;i++){
// if(arr1[i]<0){
//     console.log(arr1[i]);
// }
//}[-4,-3,-6,-1,-8]

// 3.check if a string is a palindrome or not.

// let nums = [6,8,4,7]

// let newArr = nums.map((val) => {
//     return val*val;
// })

// console.log(nums)
// console.log(newArr)

// for a given array of numbers, print the square of each value using foreach loop, let arr=[1,2,3,4,5,6,7]

// let arr = [1,2,3,4,5,6,7]
// arr.forEach((val) => {
// console.log(val*val)
// })

// filter method

// let arr = [1,2,3,4,7,8,9]

// let evenArr = arr.filter((val) => { 
//     return val % 2 ===0;
// })
//     console.log(evenArr)

//we are given array of marks of students, filter out of the marks of students that scored more than 90.
// marks = [78,89,90,53,95,28,96]

let marks = [78,89,90,53,95,28,96]
let newMark = marks.filter((val) =>{
    return val >90;
})
console.log(newMark)






