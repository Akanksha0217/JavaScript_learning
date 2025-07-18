let btn1=document.querySelector("button");

let body=document.querySelector("body");

let currentmode="light"

btn1.addEventListener("click", ()=>{
   if (currentmode ==="light"){
    currentmode="dark";
    body.style.backgroundColor="black";
   }
   else{
    currentmode="light";
    body.style.backgroundColor="white";
   }

   console.log(currentmode);
});

//div
let currentCo="red"
let div= document.querySelector(".div")
div.addEventListener("mouseover",()=>{
     if (currentCo ==="red"){
    currentCo="pink";
    div.style.backgroundColor="pink";
   }
   else{
    currentCo="red";
    div.style.backgroundColor="red";
   }

   console.log(currentCo);
   
})