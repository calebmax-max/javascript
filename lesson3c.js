// Javascript functions
// A function is a block  of code that performs a certain action/task
// A simple structure of a function is given in below
// function keyword, name of the function, parenthesis  the body of the function  inside the curly braces
function sayHello(){
    console.log("Hello there, Hope youare having a good day?")

    
}
// call/invoke the function by use of the name of the function
sayHello()


//example 2
function sayGoodbye(){
    console.log("Good bye, have a nice day and a weekend ahead")
}
// call the function
sayGoodbye()

// Research on arrow funtions, functions with parameters and anonymous in javacsript.
//Arrow functions are a shorter way to write functions.
const greet = (name) => {
  return "Hello " + name;
};

//2️⃣ Functions With Parameters
//Parameters are values you pass into a function.
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5)); // 20
//a and b → parameters
//4 and 5 → arguments


//3️⃣ Anonymous Functions
//Anonymous functions are functions without a name.
const greeting = function(name) {
  return "Hello " + name;
};