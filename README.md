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


