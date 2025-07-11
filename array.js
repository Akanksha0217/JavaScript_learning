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
 
