// Q1 get user to input a number using prompt("enter a number").check if number is a multiple of 5 ornot
// n=prompt("enter a number");
// console.log(n);

// if (n%5==0){
//     console.log(n,"IS multiple of 5")
// }
// else{
//     console.log(n,"Not a multiple of 5")
// };


//Q2 write a code which can give grades to student according to their score
let m=prompt("enter your marks")
console.log("your marks is: ",m)

if(m>=90){
    console.log("Grade A")
}
else if(m>=70 && m<=89){
    console.log("grade B")
}
else if(m>=60 && m <= 69){
    console.log("grade C") 
}
else if(m>=50 && m <= 59){
    console.log("grade D") 
}
else if(m>=0 && m <= 49){
    console.log("grade f") 
}