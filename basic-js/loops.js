//Print "web development" 10 times...

// for(let i=1; i<=10; i++){
//     console.log("web development")
// }

//Calculate the sum of 1 to 10

// let sum =0;
// for( let i=1; i<=10; i++){
//     sum +=i
// }
// console.log(sum);//55

//while loop
//Print "Development" 3 times in while loop.

// let i=1;
// while(i<=3){
//     console.log("development")
//     i++;
// }

//do-while loop
//Print "WBC" 6 times... in do-while loop

// let i=1;
// do{
//     console.log("WBC");
//     i++;
// }while(i<=5)
//WBC
//WBC
//WBC
//WBC
//WBC

//for-of loop

// let str = "web bocket"
// let size = 0;
// for( let i of str){
//     console.log(i)
//     size++;
// }
// console.log("size of the given string is:", size) //10


//for-in loop

let mishra= {
    name :"mishra babu",
    age :67,
    CGPA :8.9,
    isPass :true, 
    carrier :"good"
}
for(let i in mishra){
    console.log("key =",i,"value=", mishra[i])
}