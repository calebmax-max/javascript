//Anonymous functions in Javascript
// These are functions that exist without a name

// Below is an example of such functions
// The below function shall take the name of the variable they are contained in.
const greet = function(){
    console.log("Hello there, hope your Monday is fine...")
}
console.log(typeof(greet))
greet();


// Below is another function
(function(){
    console.log("Welcome to the world of programming....")
})();

// read on arrow function with and without parameters
//research on modules in Js

// Arrow funcions with parameters
//These functions accept input values.
// One parameter
const greetings = name => "Hello " + name;

const greeting = (name) => {
    return "Hello " + name;
}

console.log(greeting("Caleb"));

// Multiple parameters
const add = (a, b) => {
    return a + b;
}

console.log(add(5, 3));
// Used in:

//🛒 E-commerce websites

//💳 Payment systems

//📊 Dashboards

// Arrow functions without parameters
//When there are no inputs, you must use empty brackets ().
const sayHello = () => {
    console.log("Hello World");
}

sayHello();
//Used in:

//⏰ Displaying time on websites

//📅 Showing current date in apps


//Modules in Js
// A module is a separate JavaScript file that contains code (variables, functions, classes) that you can export and use in another file.

//Modules help you:

//Organize code
//Avoid repeating code
//Keep your project clean (very important for big projects like your website or web app)
  // Exporting from a module
  //Named export
export const addition = (a, b) => a + b;

export const subtract = (a, b) => a - b;
