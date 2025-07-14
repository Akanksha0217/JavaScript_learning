//Q1 create a function using the function ,that takes a string as an argument and returns the number of vowels in string

// function count_vow(str){
//    let count=0;
//     for(let i=0;i<str.length;i++){
//       if(str[i]=="a"|| str[i]=="e" ||str[i]=="i"|| str[i]=="o"||str[i]=="u"){
//         count ++;
//       }
//     }
//     console.log(count)
// }

// str="akankshaheiou"
// console.log(count_vow(str))



//Q2 create same function uisng arrow fun
const vow_co=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
      if(str[i]=="a"|| str[i]=="e" ||str[i]=="i"|| str[i]=="o"||str[i]=="u"){
        count ++;
      }
    }
    console.log(count)
}

//Q3  for a given array ,print square of each value using forEach loop
let a=[1,2,3,4,5];

a.forEach(function squVal(val){
  console.log(val*val)
})
