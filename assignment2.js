// Assignment



// Global and Local variables
//Global variable is declared outside any function or block.
//It ca be accessed anywhere in your program
let name = "Caleb";   // Global variable

function greet() {
    console.log("Hello " + name);
}

greet();   // Hello Caleb
console.log(name);    // Caleb
console.log("==================================")

//Local variables
// Is declared inside a function or block
function greet() {
    let message = "Hello";
    console.log(message);
}

greet();          // Hello
console.log(message); // ❌ Error (not defined)
console.log("==================================")


const number =(num) =>{
    for(let num=1; num <=50; num++)
        if(num %3 == 0){
            console.log("Fizz")
        }
        else if(num %5 ==0){
            console.log("Buzz")
        }
        else if(num % 3 == 0 && num % 5 == 0){
            console.log("FizzBuzz")
        }
        else{
            console.log(num)
        }

};
number();
console.log("==================================")
