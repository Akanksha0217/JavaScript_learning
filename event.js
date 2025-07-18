// document.querySelector("btn1");
// btn1.onclick=() =>{
//     console.log("btn1 was clicked");
//     let a= 25;
//     a++;
//     console.log(a);
// }

//event object
// document.querySelector("btn1");
// btn1.onclick=(e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);

// }

//event listern
document.querySelector("btn1");
btn1.addEventListener("click",()=>{
    console.log("button btn1 is clike- handler1")
});

//handler2
btn1.addEventListener("click",()=>{
    console.log("button btn1 is clike- handler2")
});

//handerl3
let handler3=()=>{
    console.log("button btn1 is clike- handler3")
};
btn1.addEventListener("click",handler3);


//remove 
btn1.removeEventListener("click",handler3)

document.querySelector("btn2");
btn2.onclick =() => {
    alert("form is sumbit");
    console.log("form is sumbit");
}