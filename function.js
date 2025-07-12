//blog of code

//function defination
function myfunction(){
    console.log("welcome to my learing js ");
    console.log("thank you")
}

//function call
myfunction()



//function of add 2 number
function addFUn(a,b){
    console.log("sum of number is:",a+b)
}

addFUn(2,4);
 
//arrow fun of add
const arrowsum=(a,b) =>{
    console.log(a+b);
}
arrowsum(4,4)

 //multiplaction fun
function mult(a,b){
    console.log("MUltiplacation :",a*b)
}
mult(2,4);

//arrow fun of mult
const Arrow_mult=(x,y)=>{
    console.log("arrow multiplacation",x*y)
}
Arrow_mult(10,10);

//forEach function
let array=[1,2,3,4,5];

array.forEach(function printVal(val){
    console.log(val);
})
