//property
//1 inner text
 let d=document.querySelector("div");
 console.log(d)
console.log(d.innerText)
 
 //innerHTml
 console.log(d.innerHTML)

 //push 
//  console.log(d.innerText="abcs")

//acces heading
let heading=document.querySelector("h1");
console.log(heading.innerText="new heading");

//get attribute
let id=d.getAttribute("id");
console.log(id);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

//set attribute
console.log(para.setAttribute("pa","123"));

//style
d.style.backgroundColor="pink";

//insert element
let newBtn= document.createElement("button");
console.log(newBtn);
newBtn.innerText="clike me"

// // add this button at end of div inside
// d.append(newBtn);

// // add this button at start of div inside
// d.prepend(newBtn);

// //  add this button at just before  div outside
//  d.before(newBtn);

//  add this button at just after  div outside
//  d.after(newBtn);

//delete element
let newhead=document.createElement("h1");
newhead.innerText="newly created headingg";
document.querySelector("body").prepend(newhead);
newhead.remove();