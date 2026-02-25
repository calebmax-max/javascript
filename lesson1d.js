// String Data Type
//A string is a series/sequence of characters that are enclosed inside of quotation marks.
let name= "Caleb"
console.log("The name is:", name)
console.log(typeof(name))

// Floating point : This is a number with a decimal
let quantity = 35.5
console.log("The quantity of sugar bought is:", quantity)
console.log(typeof(quantity))

//Boolean : It returns true ar false
let isAdult = true
let isRegistered = false
console.log("Is James an adult:", isAdult)
console.log("Is he registered as a voter:", isRegistered)

console.log(typeof(isAdult))


// Undefined : This is a data type that has been declared but there is no value that has been assigned
let county;
console.log("The county is:", county)


// null data type : It is a data type that contains null values
let username = null
console.log("What is the user name:", null)

// Assignment research and come up with examples on objects and Array data types and show how to access items of the object and of an array
// Object data type - Used to store  multiple values in a single variable as key-value pair.
let person = {
    name : "Caleb",
    age : 18,
    isDeveloper : true

};
console.log(person)

// How to access items in object data type
//Dot notation
console.log(person.name);  // Caleb
// Bracket Notation
console.log(person["age"]); // age

//Objects can store different data types
let user = {
  username: "tonny",
  score: 100,
  isOnline: true,
  skills: ["HTML", "CSS", "JavaScript"], // Array inside object
  greet: function() {
    console.log("Hello!");
  }
};
//Strings,Numbers,Booleans, Arrays,Functions(methods),Even other objects.


// Arrays - special type of object used to store multiple values in order(THINK OF A LIST)
let fruits = ["Apple", "Mango", "Orange"];

// Accessing
console.log(fruits)
console.log(fruits[0]); //Apple
console.log(fruits[1]);  // Mango

// Arrays store different types of data types
let mixed = ["Caleb", 22, true, ["HTML", "CSS"]];
//Strings,Numbers,Booleans,Other arrays, Objects

// CHanging arrays
let numbers = [10, 20, 30];

numbers[1] = 50;

console.log(numbers); // [10, 50, 30]

// Add to the end
fruits.push("Banana");
// Remove last item
fruits.pop();
// Add at the beggining
fruits.unshift("Pineapple");
// remove first item
fruits.shift();


// | Array              | Object              |
// | ------------------ | ------------------- |
// | Ordered list       | Key-value pairs     |
// | Uses index numbers | Uses named keys     |
// | `["A", "B"]`       | `{ name: "Caleb" }` |



