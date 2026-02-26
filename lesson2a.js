// Object data types
// An object in js is a data type that stores data in form of key-value pairs

let person = {
    Name : "Caleb Tonny",
    Age : 18,
    isRegistered : true

};
console.log("The details of the person is: ", person)

// First merhod is by the use pf the square brackets
console.log(person["Age"])

// second methos is by use of the dot (>) notation
console.log(person.Name)

// Check the data type
console.log(typeof(person))

//Array data type
// This refers to a collection of items that are all indexes
let fruits = ["Msngo", "Pineapple", "Apple", "Banana", "Melon",  "Lemon", "Grapes"]

console.log("The entire array of fruits is:",fruits)

//To access the items of an array we use the index
console.log(fruits[3])

//You can slice items of an array
console.log(fruits.slice(2, 5))
