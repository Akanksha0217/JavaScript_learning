//object def
const student={
    fullName:"Akanksha",
    age:20,
    cgpa:8.2,
};
console.log(student)

//print the value
console.log(student['age'])
console.log(student.age)

//change or update value
student['age']=student["age"]+1
console.log(student.age)


//Q1 create a const object called producr to store info shown in picture(amzon pen photo,name,star,price,discount)
const product={
    nameofpr:"Parker pen",
    rating:4,
    price:270,
    discount:5,
};
console.log(product)

//Q2 create a const object called profile to store info
const profile={
    Name:"shradha",
    post:195,
    followers:569,
    isfollow:true,
}
console.log(typeof profile)  //object
console.log(typeof profile["Name"]) //string