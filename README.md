JAVASCRIPT :-

- Javascript is used for building logics of a web page.
- Javascript is a high level programming language, used in both client side as well as server side.
- Javascript comes from echma script so we see the latest version of javascript in the form of echma script.
- Now we used javascript version 6 i.e ES6 (echma script 6)
- In another way we called ES6 as the vanilla Javascript.
- Node JS is the run time environment of javascript.

Variable :-

- Variable is a container to store some data.
- In javascript thera are 3 types of variable are there...

1.var :

-var is a type of variable which is used for changing the variable in later stage.
- var is used in oldest browser so now a days we are don't use var most of the cases.

2.const :

-const means constant.

3.let :

-let is a type of variable which is also used for changing the variable in later stage.
-Now these days, most of the cases we used let for changing the variable.
-let is a block scope code so we have been used let in most cases.

Rules for creating variable name :-

-Variable names are case sensitive "a" & "A" is different.
-Only letter, digits, underscore & special character is allowed.(Do not keep white space over here.)
-Only letter, underscore or special character should be the 1st character only.
-Reserved words cannot be a variable name.
e.g.boolean,for,while,this etc...

Datatype in Javascript :-

-Datatype is an attributes associated with a piece of data that tells a computer system how to interprit its value.
-In datatype we used "typeof" operator to know what type of data it is.
-Mainly in javascript there are 2 type of datatypes are there.

1.Primitive datatype

-In javascript there are 7 types of primitive datatypes are there like...

1.Number - Number are the type of datatypes those it contains some numerical value.
2.Boolean - In boolean datatype we got boolean value like true/false.
3.Undefined - data is not define.
4.Null - In this datatype we got null for the value means nothing.
5.BigInt - In BigInt we will get the big integer value (-999999999 to +999999999) on the above .
6.String - String is a type of datatype that can hold some character like names or words etc..
7.Symbol - In symbol we got one symbol of more than one value.

2.Reference datatype

-Reference datatypes are the type of datatype which can hold multiple element in a single frame.
-Reference datatypes are -> Array, Function, Object

1.Array:

-Array is a collection of similar type of datatype which can hold contigious memory location.
-Array indexing start from "0".
e.g. let arr =["hari", "sita", "ram"]
                0        1       2
2.Object:

-Object is a reference type of datatype where we can store more than one elemenet is a single frame.
-Mainly object are working on (key:value) pair.

e.g. let hari = {
  "name" :"hari bandhu sahoo",
  "phone number" :687677777,
  "address" : "bhubaneswar",
  "carrier" : "good"
}          
-In the above example left side element are the keys and right side element are the values of that key.

3.Function:

-In function we repeatedly do the task in a function.
-Function reduce our code complexity and time and space complexity.
syntax:-

function->

function my_schedule(){
  console.log("we wake up at 6am")
  console.log("we go for a amorning walk")
}

function calling->

my_schedule();

Operator in javascript:-

-Operator are the key features to do some task or operate some task.
-e.g. A+B
-In the above example A & B are the operands, "+" is our operator.
-In javascript, there are 5 types of operator are there...

1.Arithmatic operator->(+,-,*,/),%(modulus),**(exponent)
2.Assignment operator->(=,+=,-+,*=,/=,%=,**=)
3.Comparision operator->(==,!==,===)
4.Logical operator->Logical AND(&&),Logical OR(!!),Logical NOT(!)
5.Unary operator->increment(++),decrement(--)

logical AND(&&):-

A B AND(&&)
T T   T
T F   F
F T   F 
F F   F

Logical OR(||):-

A B OR(||)
T T   T
T F   T
F T   T
F F   F

Conditional statement:-

-To implement some condition in the code.
-There are 3 types of conditional statements are there...

1.if condition:-

-if condition is true then statement is true.
-Syntax:-
if (condition){
  statement
}

2.if-else condition:-

-if condition is true then statement is true otherwise false.
-Synatx:-
if(condition){
  statement
} else{
  statement
}

3.if-elif condition or switch condition:-

-Its check the condition multiple times, there the condition is true, it returns the satatement.
-if else if case , else condition if the default condition so if the condition doesn't satisfy any of the case then he print the default comdition.
-Synatx:-
if(condition){
  statement
} else if(condition){
  statement
} else if(condition){
  statement
} else {
  statement
}

Practice task:-

write a code which can gives grades to student according to their score.
1.80-100(A)
2.70-79(B)
3.60-69(C)
4.50-59(D)
5.0-49(FAIL-go for aganwadi)

Loops in Javascript:-

-Loop are used to execute a piece of code again and again.
-There are 5 types of loops are there...
1.for loop:-

-Syntax:-
for(initialization; condition; updation){
statement
}
ex.- we want to print "web bocket" 5 times.

for(let i=1; i<=5; i++){
  console.log("web bocket")
}

working:-

i=1->web bocket
i=2->web bocket
i=3->web bocket
i=4->web bocket
i=5->web bocket

2.while loop:-

-Syntax:-
initialize;
while(condition){
  statement;
  update;
}

ex-> Print "GIFT" 5 times.. in while loop

let i=1
while(i<=5){
console.log("GIFT");
i++;
}

3.do-while loop:-

-syntax:-
initialize;
do{
  statement;
  updation;
}while(condition)

4.for-of loop:-

-It iterates on string and array.

5.for-in loop:-

-It iterates on objects.

ex.
let i=hari

ler arr=["sita","hari","bibhu","ram"]

String in Javascript:-

-Basically string is a sequence of character used to represent text.
-Create a string -> let str="web bocket".
-We calculate the string length -> str.length property.
-We calculate the string index -> str[0],str[1]...etc.

String Literals:-

-Its a way to have embedded expression in string.
-Its denoted by symbol ''.

String Interpolation:-

-To create string by doing substitution of placeholder.
-ex.-> String text $(expression) string text.

Escape symbol in string:-

1.\n ->new line
2.\t ->new tab

String method in javascript:-

1.str.toUppercase()
2.str.toLowercase()
3.str.trim()
4.str.slice(start,end)
5.str.concat(str2)
6.str.replace(oldval, newVal)-> its change the 1st sequence.
7.str.replaceAll(oldVal,newVal)
8.str.charAt(idx)

Arrays in javascript:-

-Array is a collection of items.
-ex.
let heros = ["iron man", "bat man", "spider man"]
-array index starts from 0.
-arr[0],arr[1]...etc.

Looping over an array:-

-loop -> iteration
-syntax ->
for(let i = 0; i< arr.length;i++){
  statement
}


1.for a given array with marks of students->[89,74,45,90,38,93].find the average marks of the entire class.
2.for a given array with price of 5 items->[768,987,456,765,345].all items have an offer of 10% off of them. change the array to store final price after applying offer.


Array methods on Javascript:-

1.push- add an element to the end
2.pop- remove from the end
3.toString- convert array into string
4.concat-
5.unshift- add an element to the start
6.shift- remove an element to the first
7.slice()- return a pice of the array
8.splice()- change original array(add, remove, replace)

Function in javascript:-

-it is a block of code that perform a specific task, can be invoked(called) whenever we need.
ex. (in-build function)
1. console.log("hello world")-> in that code log() is a function
2. "abc".toUpperCase()-> in this code toUpperCase() is a function 
3. [1,2,3].push(4)-> in this code push() is a function.  

-There are 2 types of function in javascript.
1.Normal function
2.Arrow function

//Type A function
//function creation
function functionname(){
  // do some task
}

//function calling
functionName()

-> Type B function
// function creation
function functionname(parameter){
  //do some task
}

//function calling
functionName(arguments)

2.Arrow function:-

-Its a compact way of writing a function.
-It uses map function to retrive the backend data, filter function for filterise our data...

const functionName = (parameter..)=>{
  //do some task
}

//function calling
functionName()

ex.(Normal function)
function sum(a,b){
  return a+b:
}

sum(2,3);


ex.(Arrow function)
const sum=(a,b)=> {
  return a+b;
}
sum(2,3);

Practice task:-

create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in that string.(TCS String Question)