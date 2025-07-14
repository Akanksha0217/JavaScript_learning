// //Q1 FOr a given array witg marks of student [85,97,44,37,76,60] .find average of class

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let mark of marks){
//    sum = sum +mark
// }
// console.log(`sum of marks is ${sum}`);
// let b=console.log(`no.of student in class ${marks.length}`);
// let avg=(sum /(marks.length));
// console.log(`Average of class is ${avg}`);


// //Q2 for a given array with prices of 5 items [250,645,300,900,50].All items have an offer of 10% on them. Chnage the array to store final price after applying offer
// // method1
// // let prices= [250,645,300,900,50];
// // let offer=0.1;
// // let offer_pr;
// // let prices_offer=[]
// // for(let i=0;i<prices.length;i++){
// //     offer_pr= prices[i]-(prices[i]*offer);
// //     prices_offer.push(offer_pr);
// // }
// // console.log(prices_offer);


// //method2
// let prices= [250,645,300,900,50];
// for(let i=0;i<prices.length;i++){
//     let offer= prices[i]/10;
//     prices[i] -= offer;
// }
// console.log(prices)

// //Q3 create an array to store cmpanies ["Bloomberg","microsoft","Uber","google","IBM","netflix"]
// //  a)remove the frist compnay from arry
// let com= ["Bloomberg","microsoft","Uber","google","IBM","netflix"];
// console.log("orignal array",com);
// console.log(com.shift());
// console.log("Delete first usimg shift()",com);

// //b)remove uber and add ola in its place
// console.log("orignal array",com);
// com.splice(1,1,"Ola")
// console.log(com)

// //c) add amazon at end
// com.push("amazon")
// console.log(com)


// //Q4 we are array of marks of student,filter out of students thta scored 90 + marks
// let score =[56,89,91,94,56,99];
// let new_score=score.filter((val)=>{
//     return val>90;
// });
// console.log(new_score);

//Q5take a number n as input from user.create an array of number from 1 to n,use reduce method  to calculate sum of all number,use reduce method to calculate product of all number
let n=prompt("enter a number");
console.log( `your number is ${n}`);

let n_array =[];
for (let i=1; i<=n;i++){
     n_array[i-1]=i;
};
console.log(n_array);

let sum=n_array.reduce((res,curr) =>{
    return  res+curr;
});
console.log("sum is",sum);

let mul=n_array.reduce((res,curr) =>{
    return  res*curr;
});
console.log(" prodcut is",mul);