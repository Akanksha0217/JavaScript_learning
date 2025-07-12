array=[97,96,95]
console.log(array)

// take all value form array
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//  using for loop
for (ind=0; ind< (array.length);ind++){
    console.log(ind);
}

let marks=[98,99,87];
//uisng for of loop
for( let mark of marks ){
    console.log(` marks of student ${mark}`);

};


//Array Methods
//1)push :add to end
let foodItems=["potato","apple","tomato"];
foodItems.push("chips");
console.log(foodItems);


//unshit():add to start
items=["apple","banana","peru"]
items.unshift("mango")
console.log(items)

//pop(): delete from end and return
let food=["potato","apple","tomato"];
console.log(`deleted item in list ${food.pop()}`)

//shift();delete from start and return

//toString
let foods=["potato","apple","tomato"];
console.log(foods.toString());

//concat
let marvel_heroes=["thor","iroman"];
let b=["superman","batman"];
let heros= marvel_heroes.concat(b)
console.log(heros)
 
//splice -change the original aary (startindex, delectcount ,new element)
a=[1,2,3,4,5,6,7];
console.log("orignal array a is",a)
a.splice(2,2,101)
console.log(a)

 // 1 add element
b=[7,8,9]
b.splice(1,0,104)
console.log(b)

// 2.Delect element
a.splice(2,1)
console.log(a)

// 3. replace
c=[0,1,2,3]
console.log("orignal array a is",c)
c.splice(1,1,111)
console.log("Replace the index one is",c)


//forEach function
let aryy=["pune","delhi"];

aryy.forEach(function printVal(val){
    console.log(val.toUpperCase());
})

//filter 
let d=[1,2,3,4,5,6,7,8,9];
let newArray=d.filter( (val)=>{
    return val %2===0; 
});
console.log(newArray);