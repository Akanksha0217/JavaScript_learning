//Q1 FOr a given array witg marks of student [85,97,44,37,76,60] .find average of class

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let mark of marks){
//    sum = sum +mark
// }
// console.log(`sum of marks is ${sum}`);
// let b=console.log(`no.of student in class ${marks.length}`);
// let avg=(sum /(marks.length));
// console.log(`Average of class is ${avg}`);


//Q2 for a given array with prices of 5 items [250,645,300,900,50].All items have an offer of 10% on them. Chnage the array to store final price after applying offer
// method1
// let prices= [250,645,300,900,50];
// let offer=0.1;
// let offer_pr;
// let prices_offer=[]
// for(let i=0;i<prices.length;i++){
//     offer_pr= prices[i]-(prices[i]*offer);
//     prices_offer.push(offer_pr);
// }
// console.log(prices_offer);


//method2
let prices= [250,645,300,900,50];
for(let i=0;i<prices.length;i++){
    let offer= prices[i]/10;
    prices[i] -= offer;
}
console.log(prices)